import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 pt-24 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <h3 className="font-serif text-[28px] tracking-wide text-[#2C3330] uppercase leading-none">
              Conejo Valley<br />
              <span className="text-[#738C8B] font-light text-[10px] tracking-[0.3em] mt-2 block">Family Counseling</span>
            </h3>
            <p className="text-[13px] font-light leading-[1.8] text-[#5A6360] mt-6">
              Therapy for adults, couples, and professionals in Newbury Park, CA and online throughout California.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-sans font-bold tracking-[0.2em] text-[11px] uppercase mb-8 text-[#738C8B]">Explore</h4>
            <ul className="space-y-4 text-[13px] font-light text-[#5A6360]">
              <li><Link href="/" className="hover:text-[#2C3330] transition-colors">Home</Link></li>
              <li><Link href="#contact" className="hover:text-[#2C3330] transition-colors">About Us</Link></li>
              <li><Link href="#contact" className="hover:text-[#2C3330] transition-colors">Services</Link></li>
              <li><Link href="#contact" className="hover:text-[#2C3330] transition-colors">Rates & Insurance</Link></li>
              <li><Link href="#contact" className="hover:text-[#2C3330] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Office */}
          <div>
            <h4 className="font-sans font-bold tracking-[0.2em] text-[11px] uppercase mb-8 text-[#738C8B]">Office</h4>
            <ul className="space-y-4 text-[13px] font-light text-[#5A6360] leading-[1.8]">
              <li>
                1234 Ocean Avenue<br/>
                Suite 200<br/>
                Newbury Park, CA 91320
              </li>
              <li className="mt-6">
                <span className="block mb-1 font-semibold">Hours by appointment</span>
                In-person & Virtual sessions
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans font-bold tracking-[0.2em] text-[11px] uppercase mb-8 text-[#738C8B]">Contact</h4>
            <ul className="space-y-4 text-[13px] font-light text-[#5A6360]">
              <li>
                <a href="tel:310-555-0199" className="hover:text-[#2C3330] transition-colors">(310) 555-0199</a>
              </li>
              <li>
                <a href="mailto:hello@conejovalley.com" className="hover:text-[#2C3330] transition-colors">hello@conejovalley.com</a>
              </li>
            </ul>
          </div>
          
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#516B69] text-white py-6 text-[11px] font-light tracking-wide">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Conejo Valley Family Counseling. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#contact" className="hover:text-gray-200 transition-colors">Privacy Policy</Link>
            <Link href="#contact" className="hover:text-gray-200 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
