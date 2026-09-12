import Image from "next/image";

export default function TeamSection() {
  return (
    <section className="bg-[#F9F8F5] relative">
      <div className="flex flex-col-reverse lg:flex-row">
        
        {/* Left Content */}
        <div className="w-full lg:w-[45%] bg-[#E8E1D5] flex items-center justify-center py-24 px-8 lg:px-20">
          <div className="max-w-md w-full">
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#738C8B] mb-6">Meet the Team</p>
            <h2 className="font-serif text-[40px] sm:text-[50px] text-[#2C3330] mb-8 leading-[1.1]">
              We're all about making a <br/>
              <span className="font-script text-[#738C8B] text-[60px] sm:text-[70px] inline-block -ml-2 -mt-4 transform -rotate-2">connection.</span>
            </h2>
            <div className="space-y-6 text-[15px] text-[#5A6360] font-light leading-[1.8] mb-12">
              <p>
                Our team is composed of dedicated, highly-trained professionals who genuinely care about your well-being. We believe that the foundation of any successful therapy is the relationship between you and your therapist.
              </p>
              <p>
                We don't just sit and nod. We actively engage, challenge, and support you as you navigate through your most difficult moments. Think of us as your grounded co-pilots in this journey of healing.
              </p>
            </div>
            <a
              href="#contact"
              className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#738C8B] hover:text-[#5f7574] transition-colors border-b border-[#738C8B] hover:border-[#5f7574] pb-1"
            >
              Meet the team
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-[55%] relative h-[500px] lg:h-auto min-h-[600px]">
          <Image 
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2000&auto=format&fit=crop" 
            alt="Therapists talking" 
            fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
}
