const specialties = [
  {
    title: "Trauma Recovery",
    description: "Healing complex PTSD, developmental trauma, and lingering emotional wounds with evidence-based modalities designed to safely process past experiences."
  },
  {
    title: "Anxiety & Depression",
    description: "Actionable strategies for high-achievers to regulate their nervous systems, set healthy boundaries, and restore their energy and focus."
  },
  {
    title: "Life Transitions",
    description: "Support for career changes, entering parenthood, grief, or adapting to major life pivots with resilience and clarity."
  },
  {
    title: "Relationship Counseling",
    description: "Enhancing communication, deepening intimacy, and resolving gridlocked conflict to help partners reconnect meaningfully."
  }
];

export default function SpecialtiesSection() {
  return (
    <section className="bg-white pb-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          <div className="w-full lg:w-[40%]">
            <h2 className="font-serif text-[40px] sm:text-[50px] text-[#2C3330] leading-[1.1]">
              Our <br/>
              <span className="font-script text-[#738C8B] text-[60px] sm:text-[70px] inline-block -ml-2 -mt-4 transform -rotate-2">specialties</span> <br/>
              include...
            </h2>
          </div>

          <div className="w-full lg:w-[60%]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-16">
              {specialties.map((item, index) => (
                <div key={index}>
                  <h4 className="font-serif text-[22px] text-[#2C3330] mb-4">{item.title}</h4>
                  <p className="text-[15px] text-[#5A6360] font-light leading-[1.8] mb-6">
                    {item.description}
                  </p>
                  <a
                    href="#contact"
                    className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#738C8B] border-b border-gray-300 pb-1 hover:border-[#738C8B] transition-colors inline-block"
                  >
                    Learn more
                  </a>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
