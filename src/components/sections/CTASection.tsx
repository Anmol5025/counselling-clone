import Image from "next/image";

export default function CTASection() {
  return (
    <section id="contact" className="relative bg-[#1E2420] py-32 lg:py-40 overflow-hidden flex items-center justify-center">
      
      {/* Left cut-off image */}
      <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[40%] w-[20%] aspect-[3/4] z-0">
         <Image 
           src="https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=1000&auto=format&fit=crop" 
           alt="Sand texture" 
           fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
           className="object-cover rounded-2xl"
         />
      </div>

      <div className="relative z-10 mx-auto max-w-2xl px-6 lg:px-8 text-center flex flex-col items-center">
        <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#A9927D] mb-8">Take the first step</p>
        <h2 className="font-serif text-[40px] sm:text-[50px] text-[#E8E3D9] leading-[1.1] mb-8">
          Ready to feel like &nbsp;<span className="font-serif italic font-light text-[#A9927D]">yourself</span> again?
        </h2>
        <p className="text-[15px] text-[#B5B0A6] font-light leading-[1.8] mb-10 max-w-lg">
          Reach out today to schedule a free 15-minute consultation. Let's see if my approach is a good fit for your journey toward healing and sustainable well-being.
        </p>
        <a
          href="#contact"
          className="inline-block bg-[#A9927D] px-10 py-4 text-[11px] font-semibold tracking-[0.2em] text-white uppercase hover:bg-[#b06f52] transition-all rounded-sm"
        >
          Book a Consultation
        </a>
      </div>

      {/* Right cut-off image */}
      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-[40%] w-[20%] aspect-square z-0">
         <Image 
           src="https://images.unsplash.com/photo-1495954484750-af469f2f9be5?q=80&w=1000&auto=format&fit=crop" 
           alt="Water texture" 
           fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
           className="object-cover rounded-2xl"
         />
      </div>

    </section>
  );
}
