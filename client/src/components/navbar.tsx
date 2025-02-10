import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-black/50 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        {/* Left menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/">
            <span className="text-white hover:text-[#00FF00] transition-colors text-xs tracking-[0.2em] font-medium">HOME</span>
          </Link>
          <Link href="/about">
            <span className="text-white hover:text-[#00FF00] transition-colors text-xs tracking-[0.2em] font-medium">ABOUT</span>
          </Link>
          <Link href="#services">
            <span className="text-white hover:text-[#00FF00] transition-colors text-xs tracking-[0.2em] font-medium">SERVICES</span>
          </Link>
        </div>

        {/* Center logo */}
        <Link href="/">
          <img 
            src="/Ethereal-Logo.png" 
            alt="Ethereal" 
            className="h-12 w-auto"
            onError={(e) => {
              console.error('Logo failed to load:', e);
              const target = e.target as HTMLImageElement;
              target.style.border = '2px solid red';
            }}
          />
        </Link>

        {/* Right menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/workshops">
            <span className="text-white hover:text-[#00FF00] transition-colors text-xs tracking-[0.2em] font-medium">WORKSHOPS</span>
          </Link>
          <Link href="/consult">
            <span className="text-white hover:text-[#00FF00] transition-colors text-xs tracking-[0.2em] font-medium">CONSULT</span>
          </Link>
          <Button className="bg-[#00FF00] hover:bg-[#00FF00]/90 text-black text-xs tracking-[0.2em] font-medium px-6">
            CONTACT US
          </Button>
        </div>
      </div>
    </nav>
  );
}