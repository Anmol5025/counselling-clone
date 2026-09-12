import Image from "next/image";

export default function OurOfficeSection() {
  return (
    <section className="bg-[#1E2420] py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left: Text & Info */}
          <div className="w-full lg:w-[45%]">
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#A9927D] mb-6">Our Office</p>
            <h2 className="font-serif text-[40px] sm:text-[50px] lg:text-[56px] text-[#E8E3D9] leading-[1.1] mb-8 max-w-xl">
              A quiet, private space designed to feel &nbsp;<span className="font-serif italic font-light text-[#A9927D]">calming</span> &nbsp;and grounding.
            </h2>
            <div className="space-y-6 text-[15px] text-[#B5B0A6] font-light leading-[1.8] mb-10 max-w-lg">
              <p>
                I offer both in-person therapy from my Santa Monica office and secure telehealth sessions for clients located anywhere in California.
              </p>
              <p>
                My office features abundant natural light, comfortable seating, and an uncluttered environment. Clients often share that the physical space itself helps them feel a sense of safety, comfort, and privacy the moment they arrive.
              </p>
            </div>
            
            <div className="flex flex-col gap-3 pt-6 border-t border-[#29302B] max-w-md">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#A9927D] block"></span>
                <span className="text-[13px] font-light text-[#E8E3D9] tracking-wider uppercase">In-person Sessions (Santa Monica)</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#A9927D] block"></span>
                <span className="text-[13px] font-light text-[#E8E3D9] tracking-wider uppercase">Secure Telehealth (California)</span>
              </div>
            </div>
          </div>

          {/* Right: Images Grid */}
          <div className="w-full lg:w-[55%] flex gap-6 lg:gap-8">
            <div className="w-1/2 flex flex-col gap-6 pt-12">
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-2xl shadow-xl">
                <Image 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop"
                  alt="Therapy office seating area"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="w-1/2 flex flex-col gap-6">
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-2xl shadow-xl">
                <Image 
                  src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=2000&auto=format&fit=crop"
                  alt="Bright, natural light in therapy office"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
