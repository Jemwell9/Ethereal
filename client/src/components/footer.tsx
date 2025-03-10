
import { Link } from "wouter";
import { Building2, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-6 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center items-center">
          {/* Logo Section */}
          <div className="flex justify-center">
            <Link href="/">
              <img 
                src={`${process.env.PUBLIC_URL}/Ethereal-Logo.png`}
                alt="Ethereal" 
                className="h-48 w-auto cursor-pointer"
                style={{ filter: 'drop-shadow(0 0 8px rgba(0, 255, 0, 0.3))' }}
              />
            </Link>
          </div>

          {/* Company Info */}
          <div className="space-y-2 flex flex-col items-center">
            <Building2 className="w-6 h-6 text-[#00FF00] mb-2" />
            <p className="text-white/80 text-sm text-center">
              We are the 3D materials arm of EXSTATIC PTE LTD
            </p>
            <p className="text-[#00FF00] text-xs">[UEN No. 202243915R]</p>
          </div>

          {/* Address */}
          <div className="space-y-2 flex flex-col items-center">
            <MapPin className="w-6 h-6 text-[#00FF00] mb-2" />
            <address className="text-white/80 not-italic text-sm text-center">
              165 BUKIT MERAH CENTRAL<br/>
              #05-3667, SINGAPORE 150165
            </address>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 flex flex-col items-center">
            <div className="space-y-2 flex flex-col items-center">
              <Phone className="w-6 h-6 text-[#00FF00] mb-2" />
              <p className="text-[#00FF00] text-sm">+65 8806 2446</p>
            </div>
            <div className="space-y-2 flex flex-col items-center">
              <Mail className="w-6 h-6 text-[#00FF00] mb-2" />
              <p className="text-[#00FF00] text-sm">info@ethereal.sg</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
