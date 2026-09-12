import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="home" className="relative bg-[#1E2420] pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24 relative">
        
        {/* Left Image */}
        <div className="w-full lg:w-[45%] relative z-10 flex justify-end">
          <div className="relative w-full max-w-[500px] aspect-[3/4]">
             <Image 
               src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=2000&auto=format&fit=crop" 
               alt="Calm Santa Monica beach" 
               fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
               className="object-cover rounded-2xl"
             />
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-[55%] flex flex-col items-start z-10 pt-10 lg:pt-0 pr-8 lg:pr-32">
          <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#B5B0A6] mb-6">
            Therapy in Santa Monica, CA & Online
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-[72px] leading-[1.1] text-[#E8E3D9] mb-6 max-w-2xl">
            Overcome anxiety, heal from the past, and finally find <span className="font-script text-[#A9927D] inline-block text-7xl sm:text-8xl lg:text-[100px] -ml-2 -mt-4 transform -translate-y-2">peace.</span>
          </h1>
          <p className="text-base font-light leading-8 text-[#B5B0A6] max-w-lg mb-10">
            I help high-achieving adults navigate burnout, perfectionism, and complex trauma. Reconnect with yourself in a grounded, supportive space.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto mt-2">
            <a
              href="#contact"
              className="inline-block bg-[#A9927D] px-10 py-4 text-[11px] font-semibold tracking-[0.2em] text-white uppercase hover:bg-[#b06f52] transition-all text-center rounded-sm"
            >
              Book a Consultation
            </a>
            <a
              href="#contact"
              className="inline-block px-10 py-4 text-[11px] font-semibold tracking-[0.2em] text-[#A9927D] uppercase hover:text-[#b06f52] transition-all text-center"
            >
              Read more about me
            </a>
          </div>
        </div>

      </div>

      {/* Far right cutoff image */}
      <div className="hidden 2xl:block absolute right-0 top-[20%] w-[15%] aspect-square opacity-90 translate-x-[40%]">
         <Image 
           src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop" 
           alt="Calm interior" 
           fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
           className="object-cover rounded-2xl"
         />
      </div>
    </section>
  );
}
