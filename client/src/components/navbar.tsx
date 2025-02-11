import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-black/50 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-[1fr_auto_1fr] gap-8 items-center">
          {/* Left menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/">
              <span className="text-white hover:text-[#00FF00] transition-colors text-xs tracking-[0.2em] font-medium">HOME</span>
            </Link>
            <Link href="/about">
              <span className="text-white hover:text-[#00FF00] transition-colors text-xs tracking-[0.2em] font-medium">ABOUT</span>
            </Link>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-white hover:text-[#00FF00] transition-colors text-xs tracking-[0.2em] font-medium bg-transparent">
                    3D PRINTING
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 w-[400px] bg-black/90 backdrop-blur-sm">
                      <Link href="/services#design" className="block p-3 space-y-1 hover:bg-white/5 rounded-md transition-colors">
                        <div className="text-[#00FF00] font-medium">3D Design Services</div>
                        <p className="text-sm text-white/60">Professional CAD modeling and design optimization</p>
                      </Link>
                      <Link href="/services#materials" className="block p-3 space-y-1 hover:bg-white/5 rounded-md transition-colors">
                        <div className="text-[#00FF00] font-medium">Materials Selection</div>
                        <p className="text-sm text-white/60">Expert guidance on material selection</p>
                      </Link>
                      <Link href="/services#printing" className="block p-3 space-y-1 hover:bg-white/5 rounded-md transition-colors">
                        <div className="text-[#00FF00] font-medium">3D Printing Execution</div>
                        <p className="text-sm text-white/60">High-quality production and quality control</p>
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Center logo - now has its own column with auto width */}
          <div className="flex justify-center py-2">
            <Link href="/">
              <img 
                src="/Ethereal-Logo.png" 
                alt="Ethereal" 
                className="h-20 w-auto object-contain transition-transform hover:scale-105" 
                style={{ filter: 'drop-shadow(0 0 12px rgba(0, 255, 0, 0.4))' }}
              />
            </Link>
          </div>

          {/* Right menu */}
          <div className="hidden md:flex items-center justify-end gap-6">
            <Link href="/workshops">
              <span className="text-white hover:text-[#00FF00] transition-colors text-xs tracking-[0.2em] font-medium">WORKSHOPS</span>
            </Link>
            <Link href="/consult">
              <span className="text-white hover:text-[#00FF00] transition-colors text-xs tracking-[0.2em] font-medium">CONSULT</span>
            </Link>
            <Button className="bg-[#00FF00] hover:bg-[#00FF00]/90 text-black text-xs tracking-[0.2em] font-medium px-6 rounded-full">
              CONTACT US
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}