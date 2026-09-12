import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="home" className="relative bg-[#F9F8F5] pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24 relative">
        
        {/* Left Image */}
        <div className="w-full lg:w-[45%] relative z-10 flex justify-end">
          <div className="relative w-full max-w-[500px] aspect-[3/4]">
             <Image 
               src="https://images.unsplash.com/photo-1543807535-eceef0bc6599?q=80&w=2000&auto=format&fit=crop" 
               alt="Calm coastal view" 
               fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
               className="object-cover"
             />
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-[55%] flex flex-col items-start z-10 pt-10 lg:pt-0 pr-8 lg:pr-24 xl:pr-32 2xl:pr-48">
          <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#738C8B] mb-6">
            Therapy in Santa Monica, CA & Online
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-[72px] leading-[1.1] text-[#2C3330] mb-6 max-w-2xl">
            Overcome anxiety, heal from the past, and finally find <span className="font-script text-[#738C8B] inline-block text-7xl sm:text-8xl lg:text-[100px] -ml-2 -mt-4 transform -translate-y-2">peace.</span>
          </h1>
          <p className="text-base font-light leading-8 text-[#5A6360] max-w-lg mb-10">
            I help high-achieving adults navigate burnout, perfectionism, and complex trauma. Reconnect with yourself in a grounded, supportive space.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto mt-2">
            <a
              href="#contact"
              className="inline-block bg-[#738C8B] px-10 py-4 text-[11px] font-semibold tracking-[0.2em] text-white uppercase hover:bg-[#5f7574] transition-all text-center rounded-sm"
            >
              Book a Consultation
            </a>
            <a
              href="#contact"
              className="inline-block px-10 py-4 text-[11px] font-semibold tracking-[0.2em] text-[#738C8B] uppercase hover:text-[#5f7574] transition-all text-center"
            >
              Read more about me
            </a>
          </div>
        </div>

      </div>

      {/* Far right cutoff image */}
      <div className="hidden 2xl:block absolute right-0 top-[20%] w-[15%] aspect-square opacity-90 translate-x-[40%]">
         <Image 
           src="https://images.unsplash.com/photo-1495954484750-af469f2f9be5?q=80&w=1000&auto=format&fit=crop" 
           alt="Waves" 
           fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
           className="object-cover"
         />
      </div>
    </section>
  );
}
