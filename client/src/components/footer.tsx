
import { Link } from "wouter";
import { Building2, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-6 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 md:gap-4">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <img 
              src="/Ethereal-Logo.png" 
              alt="Ethereal" 
              className="h-16 md:h-20 w-auto"
              style={{ filter: 'drop-shadow(0 0 8px rgba(0, 255, 0, 0.3))' }}
            />
          </div>

          {/* Company Info */}
          <div className="text-center md:text-right flex flex-col items-center">
            <Building2 className="w-5 h-5 text-[#00FF00] mb-1" />
            <p className="text-white/80 text-sm">
              We are the 3D materials arm of EXSTATIC PTE LTD
            </p>
            <p className="text-[#00FF00] text-xs">[UEN No. 202243915R]</p>
          </div>

          {/* Address */}
          <div className="text-center md:text-right flex flex-col items-center">
            <MapPin className="w-5 h-5 text-[#00FF00] mb-1" />
            <address className="text-white/80 not-italic text-sm">
              165 BUKIT MERAH CENTRAL<br/>
              #05-3667, SINGAPORE 150165
            </address>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right flex flex-col items-center gap-3">
            <div className="flex flex-col items-center">
              <Phone className="w-5 h-5 text-[#00FF00] mb-1" />
              <p className="text-[#00FF00] text-sm">+65 8806 2446</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-5 h-5 text-[#00FF00] mb-1" />
              <p className="text-[#00FF00] text-sm">info@ethereal.sg</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
