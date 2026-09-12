const symptoms = [
  "Feeling constantly on edge",
  "High-functioning but exhausted",
  "Struggling with perfectionism",
  "Navigating professional burnout",
  "Lingering effects of past trauma",
  "Tension in your body and poor sleep",
  "Always bracing for something to go wrong",
  "Disconnected from your true self"
];

export default function SymptomsSection() {
  return (
    <section className="bg-[#F2EFE9] py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          <div className="w-full lg:w-[40%]">
            <h2 className="font-serif text-[40px] sm:text-[50px] text-[#1E2420] leading-[1.1]">
              A little bit about <br/>
              <span className="font-serif italic font-light text-[#A9927D] inline-block">why</span> you're here
            </h2>
          </div>

          <div className="w-full lg:w-[60%]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-0">
              {symptoms.map((symptom, index) => (
                <div key={index} className="py-5 border-b border-gray-200 text-[15px] text-[#5C6661] font-light tracking-wide">
                  {symptom}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
