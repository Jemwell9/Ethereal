import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="py-12 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <img 
            src="/logo.svg" 
            alt="Ethereal" 
            className="h-16 mx-auto mb-8"
          />
          
          <p className="text-white/80 mb-4">
            We are the 3D materials arm of<br/>
            EXSTATIC PTE LTD
          </p>
          
          <p className="text-[#00FF00] mb-2">[UEN No. 202243915R]</p>
          
          <address className="text-white/80 not-italic mb-6">
            165 BUKIT MERAH CENTRAL<br/>
            #05-3667, SINGAPORE 150165
          </address>
          
          <div className="mb-8">
            <p className="text-[#00FF00]">+65 8806 2446</p>
            <p className="text-[#00FF00]">info@ethereal.sg</p>
          </div>
          
          <nav>
            <Link href="/terms">
              <a className="text-white/60 hover:text-[#00FF00] transition-colors">
                Terms & Support
              </a>
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
