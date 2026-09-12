import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="bg-[#1E2420] py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Left Text */}
          <div className="w-full lg:w-[65%]">
            <h2 className="font-serif text-[40px] sm:text-[50px] lg:text-[56px] text-[#E8E3D9] leading-[1.1] mb-12 max-w-2xl">
              You look successful on the outside, but inside you're feeling exhausted and on edge.
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[15px] text-[#B5B0A6] font-light leading-[1.8]">
              <p>
                From the outside, everything looks fine. You're meeting deadlines, showing up for friends and family, and keeping all the plates spinning. But inside, the exhaustion is taking over. You're constantly worrying, struggling to sleep, and bracing for the next thing to go wrong. The pressure is draining your energy.
              </p>
              <p>
                It doesn't have to stay this way. In my Santa Monica office or via secure telehealth, we will create a calm, private space for you to slow down. Together, we'll uncover the root of your stress, process lingering trauma, and build resilience so you can live a more balanced life.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-[35%] flex justify-end">
            <div className="relative w-full max-w-[450px] aspect-square lg:mt-[-50px]">
              <Image 
                src="https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?q=80&w=2000&auto=format&fit=crop" 
                alt="Person walking thoughtfully" 
                fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                className="object-cover rounded-2xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
