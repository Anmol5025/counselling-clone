import Image from "next/image";

const services = [
  {
    title: "Anxiety",
    description: "Learn to manage chronic worry, panic attacks, and racing thoughts. We will work together to help you regain a sense of calm and control in your daily life.",
    image: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "Trauma & EMDR",
    description: "Safely process single-incident or complex childhood trauma using evidence-based methods like EMDR and body-oriented techniques.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "Burnout & Life Transitions",
    description: "Navigate career shifts, relationship changes, or general exhaustion. We'll focus on boundaries, identity, and reconnecting with what matters to you.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2000&auto=format&fit=crop"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        
        <div className="mb-16">
          <h2 className="font-serif text-[40px] sm:text-[50px] text-[#2C3330] flex items-center">
            Who we <span className="font-script text-[#738C8B] text-[60px] sm:text-[70px] ml-2 -mt-4 transform -rotate-2">help</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col">
              <div className="w-full aspect-square relative mb-8">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <h3 className="font-serif text-2xl text-[#2C3330] mb-4 flex items-center">
                <span className="w-2 h-2 rounded-full bg-[#738C8B] mr-3 inline-block"></span>
                {service.title}
              </h3>
              <p className="text-[15px] text-[#5A6360] font-light leading-[1.8] pl-5">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
