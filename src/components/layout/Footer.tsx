import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#F2EFE9]">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 pt-24 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <h3 className="font-serif text-[28px] tracking-wide text-[#1E2420] uppercase leading-none">
              Dr. Maya Reynolds<br />
              <span className="text-[#A9927D] font-light text-[10px] tracking-[0.3em] mt-2 block">Licensed Clinical Psychologist</span>
            </h3>
            <p className="text-[13px] font-light leading-[1.8] text-[#5C6661] mt-6">
              Therapy for adults navigating anxiety, burnout, and trauma in Santa Monica, CA and online throughout California.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-sans font-bold tracking-[0.2em] text-[11px] uppercase mb-8 text-[#A9927D]">Explore</h4>
            <ul className="space-y-4 text-[13px] font-light text-[#5C6661]">
              <li><Link href="/" className="hover:text-[#1E2420] transition-colors">Home</Link></li>
              <li><Link href="#contact" className="hover:text-[#1E2420] transition-colors">About Maya</Link></li>
              <li><Link href="#contact" className="hover:text-[#1E2420] transition-colors">Expertise</Link></li>
              <li><Link href="#contact" className="hover:text-[#1E2420] transition-colors">Approach</Link></li>
              <li><Link href="#contact" className="hover:text-[#1E2420] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Office */}
          <div>
            <h4 className="font-sans font-bold tracking-[0.2em] text-[11px] uppercase mb-8 text-[#A9927D]">Office</h4>
            <ul className="space-y-4 text-[13px] font-light text-[#5C6661] leading-[1.8]">
              <li>
                123th Street 45 W<br/>
                Santa Monica, CA 90401
              </li>
              <li className="mt-6">
                <span className="block mb-1 font-semibold">Hours by appointment</span>
                In-person & Virtual sessions
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans font-bold tracking-[0.2em] text-[11px] uppercase mb-8 text-[#A9927D]">Contact</h4>
            <ul className="space-y-4 text-[13px] font-light text-[#5C6661]">
              <li>
                <a href="tel:310-555-0199" className="hover:text-[#1E2420] transition-colors">(310) 555-0199</a>
              </li>
              <li>
                <a href="mailto:hello@drmayareynolds.com" className="hover:text-[#1E2420] transition-colors">hello@drmayareynolds.com</a>
              </li>
            </ul>
          </div>
          
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#2A2522] text-white py-6 text-[11px] font-light tracking-wide">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Dr. Maya Reynolds, PsyD. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#contact" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="#contact" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
