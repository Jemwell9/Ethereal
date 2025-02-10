import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur z-50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <div className="flex space-x-8">
          <Link href="/">
            <a className="text-white hover:text-primary/90 transition-colors uppercase text-sm tracking-wider">Home</a>
          </Link>
          <Link href="/about">
            <a className="text-white hover:text-primary/90 transition-colors uppercase text-sm tracking-wider">About</a>
          </Link>
          <Link href="#services">
            <a className="text-white hover:text-primary/90 transition-colors uppercase text-sm tracking-wider">Services</a>
          </Link>
        </div>

        <Link href="/">
          <a className="absolute left-1/2 -translate-x-1/2">
            <img src="/logo.svg" alt="Ethereal" className="h-8" />
          </a>
        </Link>

        <div className="flex space-x-8 items-center">
          <Link href="/workshops">
            <a className="text-white hover:text-primary/90 transition-colors uppercase text-sm tracking-wider">Workshops</a>
          </Link>
          <Link href="/consult">
            <a className="text-white hover:text-primary/90 transition-colors uppercase text-sm tracking-wider">Consult</a>
          </Link>
          <Button className="bg-primary hover:bg-primary/90 text-white uppercase text-sm tracking-wider px-6">
            Contact Us
          </Button>
        </div>
      </div>
    </nav>
  );
}