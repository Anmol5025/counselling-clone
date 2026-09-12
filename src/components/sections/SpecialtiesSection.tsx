const specialties = [
  {
    title: "Cognitive-Behavioral Therapy (CBT)",
    description: "Identify and change unhelpful thought patterns and behaviors, providing practical tools to manage anxiety and overwhelm in your daily life."
  },
  {
    title: "EMDR",
    description: "Eye Movement Desensitization and Reprocessing helps safely process and integrate traumatic memories so they no longer disrupt your present."
  },
  {
    title: "Mindfulness-Based Practices",
    description: "Learn to stay present and anchored, reducing the constant hum of worry and allowing you to engage more deeply with your life."
  },
  {
    title: "Body-Oriented Techniques",
    description: "Address the physical toll of chronic stress and trauma by tuning into physiological signals and helping your nervous system regulate."
  }
];

export default function SpecialtiesSection() {
  return (
    <section className="bg-[#F2EFE9] pb-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          <div className="w-full lg:w-[40%]">
            <h2 className="font-serif text-[40px] sm:text-[50px] text-[#1E2420] leading-[1.1]">
              Evidence-based <br/>
              <span className="font-serif italic font-light text-[#A9927D]">methods</span> <br/>
              include...
            </h2>
          </div>

          <div className="w-full lg:w-[60%]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-16">
              {specialties.map((item, index) => (
                <div key={index}>
                  <h4 className="font-serif text-[22px] text-[#1E2420] mb-4">{item.title}</h4>
                  <p className="text-[15px] text-[#5C6661] font-light leading-[1.8] mb-6">
                    {item.description}
                  </p>
                  <a
                    href="#contact"
                    className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#A9927D] border-b border-gray-300 pb-1 hover:border-[#C88264] transition-colors inline-block"
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
