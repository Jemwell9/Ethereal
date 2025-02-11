import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="py-20 bg-black/40 border-t border-[#00FF00]/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Company Info</h3>
            <p className="text-white/60 mb-2">
              We are the 3D materials arm of EXSTATIC PTE LTD
            </p>
            <p className="text-white/60 mb-2">UEN No. 202243915R</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Location</h3>
            <p className="text-white/60 mb-2">
              165 BUKIT MERAH CENTRAL
            </p>
            <p className="text-white/60 mb-2">
              #05-3667, SINGAPORE 150165
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contact</h3>
            <p className="text-white/60 mb-2">+65 8806 2446</p>
            <p className="text-white/60 mb-2">info@ethereal.sg</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/60 hover:text-[#00FF00] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/60 hover:text-[#00FF00] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-white/60 hover:text-[#00FF00] transition-colors">
                  Book Workshop
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#00FF00]/20 pt-8">
          <p className="text-center text-white/40 text-sm">
            © {new Date().getFullYear()} Ethereal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}