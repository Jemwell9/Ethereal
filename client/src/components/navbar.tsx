import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        {/* Left menu */}
        <div className="hidden md:flex items-center space-x-12">
          <Link href="/">
            <span className="text-white hover:text-[#00FF00] transition-colors text-sm tracking-[0.2em] font-light cursor-pointer">HOME</span>
          </Link>
          <Link href="/about">
            <span className="text-white hover:text-[#00FF00] transition-colors text-sm tracking-[0.2em] font-light cursor-pointer">ABOUT</span>
          </Link>
          <Link href="#services">
            <span className="text-white hover:text-[#00FF00] transition-colors text-sm tracking-[0.2em] font-light cursor-pointer">SERVICES</span>
          </Link>
        </div>

        {/* Center logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <img 
              src="/images/logo.png" 
              alt="Ethereal" 
              className="h-12"
              onError={(e) => {
                e.currentTarget.src = '/images/fallback-logo.png';
                console.error('Error loading logo image');
              }}
            />
          </Link>
        </div>

        {/* Right menu */}
        <div className="hidden md:flex items-center space-x-12">
          <Link href="/workshops">
            <span className="text-white hover:text-[#00FF00] transition-colors text-sm tracking-[0.2em] font-light cursor-pointer">WORKSHOPS</span>
          </Link>
          <Link href="/consult">
            <span className="text-white hover:text-[#00FF00] transition-colors text-sm tracking-[0.2em] font-light cursor-pointer">CONSULT</span>
          </Link>
          <Button className="bg-[#00FF00] hover:bg-[#00FF00]/90 text-black text-sm tracking-[0.2em] font-medium px-8">
            CONTACT US
          </Button>
        </div>
      </div>
    </nav>
  );
}