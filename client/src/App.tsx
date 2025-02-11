import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Animated3DGrid } from "@/components/ui/animated-3d-grid";
import Home from "@/pages/home";
import About from "@/pages/about";
import Booking from "@/pages/booking";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/booking" component={Booking} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-black relative">
        <div className="relative z-10">
          <Navbar />
          <main className="min-h-screen">
            <Router />
          </main>
          <Footer />
          <Toaster />
        </div>
        <Animated3DGrid variant="default" />
      </div>
    </QueryClientProvider>
  );
}

export default App;