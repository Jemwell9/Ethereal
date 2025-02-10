import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav 
      className="fixed w-full bg-background/95 backdrop-blur z-50 border-b"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto flex items-center justify-between h-16">
        <Link href="/">
          <a className="text-2xl font-bold text-primary">Ethereal</a>
        </Link>
        
        <div className="hidden md:flex space-x-6">
          <Link href="/">
            <a className="text-foreground/80 hover:text-primary transition-colors">Home</a>
          </Link>
          <Link href="/booking">
            <a className="text-foreground/80 hover:text-primary transition-colors">Book Workshop</a>
          </Link>
          <a href="#services" className="text-foreground/80 hover:text-primary transition-colors">
            Services
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="outline" size="icon">
            <SunIcon className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
          <Button asChild>
            <Link href="/booking">Book Now</Link>
          </Button>
        </div>
      </div>
    </motion.nav>
  );
}
