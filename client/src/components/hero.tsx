import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath d='M96,95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1,0v-9h-9v9h9zm-10,0v-9h-9v9h9zm-10,0v-9h-9v9h9zm-10,0v-9h-9v9h9zm-10,0v-9h-9v9h9zm-10,0v-9h-9v9h9zm-10,0v-9h-9v9h9zm-10,0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10,0h9v-9h-9v9zm10,0h9v-9h-9v9zm10,0h9v-9h-9v9zm10,0h9v-9h-9v9zm10,0h9v-9h-9v9zm10,0h9v-9h-9v9zm10,0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10,0v-9h-9v9h9zm-10,0v-9h-9v9h9zm-10,0v-9h-9v9h9zm-10,0v-9h-9v9h9zm-10,0v-9h-9v9h9zm-10,0v-9h-9v9h9zm-10,0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10,0h9v-9h-9v9zm10,0h9v-9h-9v9zm10,0h9v-9h-9v9zm10,0h9v-9h-9v9zm10,0h9v-9h-9v9zm10,0h9v-9h-9v9zm10,0h9v-9h-9v9z'/%3E%3C/svg%3E")`
        }}
      />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <h1 className="text-7xl font-bold mb-6 tracking-tighter">
            <span>PRINTING YOUR</span><br />
            <span>IDEAS TO </span>
            <span className="text-primary bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">LIFE</span>
          </h1>
          <p className="text-xl text-foreground/80 mb-8 max-w-2xl">
            Transform your concepts into reality with our state-of-the-art 3D printing services.
            From prototypes to production, we bring your vision to life with precision and care.
          </p>
          <div className="flex gap-4">
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="/booking">Get Started</Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}