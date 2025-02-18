
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="py-8 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <img 
              src="/Ethereal-Logo.png" 
              alt="Ethereal" 
              className="h-24 w-auto"
              style={{ filter: 'drop-shadow(0 0 8px rgba(0, 255, 0, 0.3))' }}
            />
          </div>

          {/* Company Info */}
          <div className="text-right">
            <p className="text-white/80">
              We are the 3D materials arm of EXSTATIC PTE LTD
            </p>
            <p className="text-[#00FF00]">[UEN No. 202243915R]</p>
          </div>

          {/* Address */}
          <address className="text-white/80 not-italic text-right">
            165 BUKIT MERAH CENTRAL<br/>
            #05-3667, SINGAPORE 150165
          </address>

          {/* Contact Info */}
          <div className="text-right">
            <p className="text-[#00FF00]">+65 8806 2446</p>
            <p className="text-[#00FF00]">info@ethereal.sg</p>
          </div>

          {/* Terms Link */}
          <div>
            <Link href="/terms" className="text-white/60 hover:text-[#00FF00] transition-colors">
              Terms & Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
