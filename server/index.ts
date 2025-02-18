import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // ALWAYS serve the app on port 5000
  // this serves both the API and the client
  const PORT = 5000;
  let serverInstance;
  function startServer(port: number) {
    serverInstance = app.listen(port, "0.0.0.0", () => {
      log(`serving on port ${port}`);
    });

    serverInstance.on('error', (err: any) => {
      if (err.code === 'EADDRINUSE') {
          console.log(`Port ${port} is in use, attempting to find an available port.`);
          findAvailablePort(port + 1);
      } else {
          console.error('Server error:', err);
      }
    });
  }


  function findAvailablePort(port: number) {
    const maxAttempts = 10;
    let attempt = 0;
    const interval = setInterval(() => {
        if (attempt >= maxAttempts) {
          clearInterval(interval);
          console.error(`Could not find an available port after ${maxAttempts} attempts`);
          process.exit(1);
        }
        const testServer = app.listen(port, "0.0.0.0", () => {
          log(`serving on port ${port}`);
          clearInterval(interval);
          serverInstance = testServer;
        }).on('error', (err: any) => {
            if (err.code === 'EADDRINUSE') {
                console.log(`Port ${port} is in use, trying ${port + 1}`);
            } else {
                console.error('Server error:', err);
                clearInterval(interval);
                process.exit(1);
            }
            attempt++;
        });

    }, 100);
  }

  startServer(PORT);
})();