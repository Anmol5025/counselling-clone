import Image from "next/image";

export default function ApproachSection() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <div className="w-full lg:w-1/2">
            <div className="relative w-full aspect-[4/3]">
              <Image 
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop" 
                alt="Walking on beach" 
                fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                className="object-cover"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <h2 className="font-serif text-[40px] sm:text-[50px] lg:text-[56px] text-[#2C3330] leading-[1.1]">
              A quiet, private space designed to feel <br/>
              <span className="font-script text-[#738C8B] text-[60px] sm:text-[80px] inline-block -ml-2 transform -rotate-2">calming</span> <br/>
              and grounding.
            </h2>
          </div>

        </div>
      </div>
    </section>
  );
}
