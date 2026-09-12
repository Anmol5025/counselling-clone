import Image from "next/image";

export default function BannerSection() {
  return (
    <section id="rates" className="relative py-32 lg:py-48 flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2000&auto=format&fit=crop" 
          alt="Ocean waves" 
          fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
          className="object-cover object-center"
        />
        {/* Dark overlay to make text readable */}
        <div className="absolute inset-0 bg-[#2C3330]/50"></div>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h2 className="font-serif text-[32px] sm:text-[40px] lg:text-[48px] text-white leading-[1.2] font-light tracking-wide">
          You deserve a place where you can say out loud what's undone you. A refuge and a space to say, "I'm not doing okay right now."
        </h2>
      </div>
    </section>
  );
}
