import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50">
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        {/* Left menu */}
        <div className="flex items-center space-x-12">
          <Link href="/">
            <a className="text-white hover:text-[#00FF00] transition-colors text-sm tracking-widest">HOME</a>
          </Link>
          <Link href="/about">
            <a className="text-white hover:text-[#00FF00] transition-colors text-sm tracking-widest">ABOUT</a>
          </Link>
          <Link href="#services">
            <a className="text-white hover:text-[#00FF00] transition-colors text-sm tracking-widest">SERVICES</a>
          </Link>
        </div>

        {/* Center logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <Link href="/">
            <img src="/logo.svg" alt="Ethereal" className="h-12" />
          </Link>
        </div>

        {/* Right menu */}
        <div className="flex items-center space-x-12">
          <Link href="/workshops">
            <a className="text-white hover:text-[#00FF00] transition-colors text-sm tracking-widest">WORKSHOPS</a>
          </Link>
          <Link href="/consult">
            <a className="text-white hover:text-[#00FF00] transition-colors text-sm tracking-widest">CONSULT</a>
          </Link>
          <Button className="bg-[#00FF00] hover:bg-[#00FF00]/90 text-black text-sm tracking-widest px-8">
            CONTACT US
          </Button>
        </div>
      </div>
    </nav>
  );
}