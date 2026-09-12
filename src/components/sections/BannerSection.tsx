import Image from "next/image";

export default function BannerSection() {
  return (
    <section className="relative py-32 lg:py-48 flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1471922694854-ff1b63b20054?q=80&w=2000&auto=format&fit=crop" 
          alt="Ocean waves at sunset" 
          fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
          className="object-cover object-center"
        />
        {/* Dark overlay to make text readable */}
        <div className="absolute inset-0 bg-[#3B3530]/40"></div>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h2 className="font-serif text-[32px] sm:text-[40px] lg:text-[48px] text-white leading-[1.2] font-light tracking-wide drop-shadow-md">
          "Therapy works best when you feel respected, understood, and actively involved. My goal is to help you develop insight, resilience, and a stronger relationship with yourself."
        </h2>
      </div>
    </section>
  );
}
