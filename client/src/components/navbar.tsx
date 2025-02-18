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
        <div className="flex flex-col md:grid md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-8 items-center py-2 md:py-0">
          {/* Left menu */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 w-full md:w-auto">
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
                      <Link href="/services/design" className="block p-3 space-y-1 hover:bg-white/5 rounded-md transition-colors">
                        <div className="text-[#00FF00] font-medium">3D Design Services</div>
                        <p className="text-sm text-white/60">Professional CAD modeling and design optimization</p>
                      </Link>
                      <Link href="/services/materials" className="block p-3 space-y-1 hover:bg-white/5 rounded-md transition-colors">
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

          {/* Center logo */}
          <div className="flex justify-center py-1">
            <Link href="/">
              <img 
                src="/public/Ethereal-Logo.png" 
                alt="Ethereal" 
                className="h-36 w-auto object-contain transition-transform hover:scale-105" 
                style={{ 
                  filter: 'drop-shadow(0 0 16px rgba(0, 255, 0, 0.5))',
                  transform: 'scale(1.1)'
                }}
                onError={(e) => {
                  console.error('Logo failed to load:', e);
                  const target = e.target as HTMLImageElement;
                  target.style.border = '2px solid red';
                }}
              />
            </Link>
          </div>

          {/* Right menu */}
          <div className="flex flex-col md:flex-row items-center md:justify-end gap-4 md:gap-6 w-full md:w-auto">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-white hover:text-[#00FF00] transition-colors text-xs tracking-[0.2em] font-medium bg-transparent">
                    WORKSHOPS
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 w-[400px] bg-black/90 backdrop-blur-sm">
                      <Link href="/workshops/design" className="block p-3 space-y-1 hover:bg-white/5 rounded-md transition-colors">
                        <div className="text-[#00FF00] font-medium">Design Workshops</div>
                        <p className="text-sm text-white/60">Learn professional 3D design techniques</p>
                      </Link>
                      <Link href="/workshops/3d-pen-kids" className="block p-3 space-y-1 hover:bg-white/5 rounded-md transition-colors">
                        <div className="text-[#00FF00] font-medium">3D Pen for Kids</div>
                        <p className="text-sm text-white/60">Creative and fun 3D pen activities for children</p>
                      </Link>
                      <Link href="/workshops/3d-pen-adults" className="block p-3 space-y-1 hover:bg-white/5 rounded-md transition-colors">
                        <div className="text-[#00FF00] font-medium">3D Pen for Adults</div>
                        <p className="text-sm text-white/60">Advanced 3D pen techniques and projects</p>
                      </Link>

                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link href="/consult">
              <span className="text-white hover:text-[#00FF00] transition-colors text-xs tracking-[0.2em] font-medium">CONSULT</span>
            </Link>
            <Button asChild className="bg-[#00FF00] hover:bg-[#00FF00]/90 text-black text-xs tracking-[0.2em] font-medium px-6 rounded-full">
              <Link href="/contact">CONTACT US</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}