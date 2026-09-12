import Image from "next/image";

export default function TeamSection() {
  return (
    <section className="bg-[#F9F8F5] relative">
      <div className="flex flex-col-reverse lg:flex-row">
        
        {/* Left Content */}
        <div className="w-full lg:w-[45%] bg-[#E8E1D5] flex items-center justify-center py-24 px-8 lg:px-20">
          <div className="max-w-md w-full">
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#738C8B] mb-6">Meet Dr. Maya Reynolds</p>
            <h2 className="font-serif text-[40px] sm:text-[50px] text-[#2C3330] mb-8 leading-[1.1]">
              A warm, grounded approach to <br/>
              <span className="font-script text-[#738C8B] text-[60px] sm:text-[70px] inline-block ml-2 -mt-4 transform -rotate-2">healing.</span>
            </h2>
            <div className="space-y-6 text-[15px] text-[#5A6360] font-light leading-[1.8] mb-12">
              <p>
                I'm a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences.
              </p>
              <p>
                My approach is warm and collaborative. Sessions are structured enough to feel supportive, while still leaving space for reflection and depth. I integrate evidence-based methods such as CBT, EMDR, and mindfulness to help you understand both the emotional and physiological sides of what you're experiencing.
              </p>
            </div>
            <a
              href="#contact"
              className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#738C8B] hover:text-[#5f7574] transition-colors border-b border-[#738C8B] hover:border-[#5f7574] pb-1"
            >
              Read my full bio
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-[55%] relative h-[500px] lg:h-auto min-h-[600px]">
          <Image 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2000&auto=format&fit=crop" 
            alt="Dr. Maya Reynolds" 
            fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
}
