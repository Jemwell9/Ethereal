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
    <nav className="fixed top-0 w-full z-[100] bg-black/50 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:grid md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-16 items-center py-2 md:py-0">
          {/* Left menu */}
          <div className="flex flex-col md:flex-row items-center justify-evenly gap-4 md:gap-8 w-full md:w-auto">
            <Link href="/home">
              <span className="text-white hover:text-[#00FF00] transition-colors text-[10px] tracking-[0.2em] font-medium">HOME</span>
            </Link>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-white hover:text-[#00FF00] transition-colors text-[10px] tracking-[0.2em] font-medium bg-transparent">
                    ABOUT
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 w-[400px] bg-black/90 backdrop-blur-sm">
                      <Link href="/about" className="block p-3 space-y-1 hover:bg-white/5 rounded-md transition-colors">
                        <div className="text-[#00FF00] font-medium">Who We Are</div>
                        <p className="text-sm text-white/60">Learn about our mission and values</p>
                      </Link>
                      <Link href="/about/portfolio" className="block p-3 space-y-1 hover:bg-white/5 rounded-md transition-colors">
                        <div className="text-[#00FF00] font-medium">Portfolio</div>
                        <p className="text-sm text-white/60">Check out our Portfolio</p>
                      </Link>
                      <Link href="/about/blog" className="block p-3 space-y-1 hover:bg-white/5 rounded-md transition-colors">
                        <div className="text-[#00FF00] font-medium">Blog</div>
                        <p className="text-sm text-white/60">Check out our Blog</p>
                      </Link>
                      
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-white hover:text-[#00FF00] transition-colors text-[10px] tracking-[0.2em] font-medium bg-transparent">
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
  <Link href="/home">
    <img 
      src="https://ethereal.sg/public/Ethereal-Logo.png" 
      alt="Ethereal" 
      className="h-24 w-auto object-contain transition-transform hover:scale-105 cursor-pointer" 
      style={{ 
        filter: 'drop-shadow(0 0 16px rgba(0, 255, 0, 0.5))'
      }}
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.src = 'https://ethereal.sg/public/Ethereal-Logo.png'; // Fallback path
        console.warn('Logo failed to load, using fallback');
      }}
    />
  </Link>
</div>

          {/* Right menu */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 w-full md:w-auto">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-white hover:text-[#00FF00] transition-colors text-[10px] tracking-[0.2em] font-medium bg-transparent h-8">
                    WORKSHOPS
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 w-[400px] bg-black/90 backdrop-blur-sm">
                      <Link href="/workshops/design" className="block p-3 space-y-1 hover:bg-white/5 rounded-md transition-colors">
                        <div className="text-[#00FF00] font-medium">Design Workshops</div>
                        <p className="text-sm text-white/60">Master AutoCAD and 3D design principles</p>
                      </Link>
                      <Link href="/workshops/3d-pen-kids" className="block p-3 space-y-1 hover:bg-white/5 rounded-md transition-colors">
                        <div className="text-[#00FF00] font-medium">3D Pen for Kids</div>
                        <p className="text-sm text-white/60">Fun and educational workshops for young creators</p>
                      </Link>
                      <Link href="/workshops/3d-pen-adults" className="block p-3 space-y-1 hover:bg-white/5 rounded-md transition-colors">
                        <div className="text-[#00FF00] font-medium">3D Pen for Adults</div>
                        <p className="text-sm text-white/60">Professional development and artistic expression</p>
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Link href="/consult" className="h-8 flex items-center">
              <span className="text-white hover:text-[#00FF00] transition-colors text-[10px] tracking-[0.2em] font-medium">CONSULT</span>
            </Link>
            <Button asChild className="bg-[#00FF00] hover:bg-[#00FF00]/90 text-black text-[10px] tracking-[0.2em] font-medium px-6 rounded-full h-8">
              <Link href="/contact">CONTACT US</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}