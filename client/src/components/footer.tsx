
import { Link } from "wouter";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

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
          <div className="text-right flex flex-col items-center">
            <Mail className="w-6 h-6 text-[#00FF00] mb-2" />
            <p className="text-white/80">
              We are the 3D materials arm of EXSTATIC PTE LTD
            </p>
            <p className="text-[#00FF00]">[UEN No. 202243915R]</p>
          </div>

          {/* Address */}
          <div className="text-right flex flex-col items-center">
            <MapPin className="w-6 h-6 text-[#00FF00] mb-2" />
            <address className="text-white/80 not-italic">
              165 BUKIT MERAH CENTRAL<br/>
              #05-3667, SINGAPORE 150165
            </address>
          </div>

          {/* Contact Info */}
          <div className="text-right flex flex-col items-center">
            <Phone className="w-6 h-6 text-[#00FF00] mb-2" />
            <p className="text-[#00FF00]">+65 8806 2446</p>
            <p className="text-[#00FF00]">info@ethereal.sg</p>
          </div>

          {/* Business Hours */}
          <div className="text-right flex flex-col items-center">
            <Clock className="w-6 h-6 text-[#00FF00] mb-2" />
            <p className="text-white/80">Mon - Fri: 9:00 AM - 6:00 PM</p>
            <p className="text-white/80">Sat: By Appointment</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
