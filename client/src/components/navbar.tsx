import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50">
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        {/* Left menu */}
        <div className="flex items-center space-x-12">
          <Link href="/">
            <a className="text-white hover:text-[#00FF00] transition-colors text-sm tracking-[0.2em] font-light">HOME</a>
          </Link>
          <Link href="/about">
            <a className="text-white hover:text-[#00FF00] transition-colors text-sm tracking-[0.2em] font-light">ABOUT</a>
          </Link>
          <Link href="#services">
            <a className="text-white hover:text-[#00FF00] transition-colors text-sm tracking-[0.2em] font-light">SERVICES</a>
          </Link>
        </div>

        {/* Center logo */}
        <Link href="/">
          <img 
            src="/logo.svg" 
            alt="Ethereal" 
            className="h-12 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </Link>

        {/* Right menu */}
        <div className="flex items-center space-x-12">
          <Link href="/workshops">
            <a className="text-white hover:text-[#00FF00] transition-colors text-sm tracking-[0.2em] font-light">WORKSHOPS</a>
          </Link>
          <Link href="/consult">
            <a className="text-white hover:text-[#00FF00] transition-colors text-sm tracking-[0.2em] font-light">CONSULT</a>
          </Link>
          <Button className="bg-[#00FF00] hover:bg-[#00FF00]/90 text-black text-sm tracking-[0.2em] font-medium px-8">
            CONTACT US
          </Button>
        </div>
      </div>
    </nav>
  );
}