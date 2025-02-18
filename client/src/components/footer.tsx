
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
                src="/Ethereal-Logo.png" 
                alt="Ethereal" 
                className="h-48 w-auto cursor-pointer"
                style={{ filter: 'drop-shadow(0 0 8px rgba(0, 255, 0, 0.3))' }}
              />
            </Link>
          </div>

          {/* Company Info */}
          <div className="space-y-2">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <Building2 className="w-5 h-5 text-[#00FF00]" />
              <span className="font-medium text-sm">Company</span>
            </div>
            <p className="text-white/80 text-sm">
              We are the 3D materials arm of EXSTATIC PTE LTD
            </p>
            <p className="text-[#00FF00] text-xs">[UEN No. 202243915R]</p>
          </div>

          {/* Address */}
          <div className="space-y-2">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <MapPin className="w-5 h-5 text-[#00FF00]" />
              <span className="font-medium text-sm">Address</span>
            </div>
            <address className="text-white/80 not-italic text-sm">
              165 BUKIT MERAH CENTRAL<br/>
              #05-3667, SINGAPORE 150165
            </address>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <Phone className="w-5 h-5 text-[#00FF00]" />
                <span className="font-medium text-sm">Phone</span>
              </div>
              <p className="text-[#00FF00] text-sm">+65 8806 2446</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <Mail className="w-5 h-5 text-[#00FF00]" />
                <span className="font-medium text-sm">Email</span>
              </div>
              <p className="text-[#00FF00] text-sm">info@ethereal.sg</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
