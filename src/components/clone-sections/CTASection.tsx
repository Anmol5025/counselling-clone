import Image from "next/image";

export default function CTASection() {
  return (
    <section id="contact" className="relative bg-[#F9F8F5] py-32 lg:py-40 overflow-hidden flex items-center justify-center">
      
      {/* Left cut-off image */}
      <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[40%] w-[20%] aspect-[3/4] z-0">
         <Image 
           src="https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=1000&auto=format&fit=crop" 
           alt="Sand texture" 
           fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
           className="object-cover"
         />
      </div>

      <div className="relative z-10 mx-auto max-w-2xl px-6 lg:px-8 text-center flex flex-col items-center">
        <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#738C8B] mb-8">Take the first step</p>
        <h2 className="font-serif text-[40px] sm:text-[50px] text-[#2C3330] leading-[1.1] mb-8">
          Ready to feel like <span className="font-script text-[#738C8B] text-[60px] sm:text-[70px] inline-block -ml-2 transform -rotate-2">you</span> again?
        </h2>
        <p className="text-[15px] text-[#5A6360] font-light leading-[1.8] mb-10 max-w-lg">
          Reach out today to schedule a free 15-minute consultation. We'll discuss what brings you to therapy and see if we're a good fit to work together.
        </p>
        <a
          href="#contact"
          className="inline-block bg-[#738C8B] px-10 py-4 text-[11px] font-semibold tracking-[0.2em] text-white uppercase hover:bg-[#5f7574] transition-all rounded-sm"
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
           className="object-cover"
         />
      </div>

    </section>
  );
}
