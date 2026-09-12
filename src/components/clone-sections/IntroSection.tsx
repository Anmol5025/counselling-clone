import Image from "next/image";

export default function IntroSection() {
  return (
    <section id="about" className="bg-[#F9F8F5] py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Left Text */}
          <div className="w-full lg:w-[65%]">
            <h2 className="font-serif text-[40px] sm:text-[50px] lg:text-[56px] text-[#2C3330] leading-[1.1] mb-12 max-w-2xl">
              You've been keeping it together for so long, but you are crumbling inside.
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[15px] text-[#5A6360] font-light leading-[1.8]">
              <p>
                From the outside, everything looks fine. You're meeting deadlines, showing up for friends and family, and keeping all the plates spinning. But inside, the exhaustion is taking over. The pressure to maintain this facade is draining your energy and leaving you feeling deeply disconnected from yourself and others.
              </p>
              <p>
                It doesn't have to be this way forever. In our therapy sessions, we create a safe space for you to put down the heavy armor. Together, we'll explore what's underneath the burnout, release the need for perfection, and build a sustainable path toward genuine peace and emotional resilience.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-[35%] flex justify-end">
            <div className="relative w-full max-w-[450px] aspect-square lg:mt-[-50px]">
              <Image 
                src="https://images.unsplash.com/photo-1528642474498-1af0c17fd8c3?q=80&w=2000&auto=format&fit=crop" 
                alt="Person resting hands" 
                fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
