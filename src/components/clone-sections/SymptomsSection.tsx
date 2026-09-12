const symptoms = [
  "Feeling constantly overwhelmed",
  "Struggling with boundaries",
  "Perfectionism & fear of failure",
  "Difficulty maintaining relationships",
  "Chronic stress and fatigue",
  "Feeling disconnected or numb",
  "Impostor syndrome",
  "Anxiety about the future"
];

export default function SymptomsSection() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          <div className="w-full lg:w-[40%]">
            <h2 className="font-serif text-[40px] sm:text-[50px] text-[#2C3330] leading-[1.1]">
              A little bit about <br/>
              <span className="font-script text-[#738C8B] text-[60px] sm:text-[70px] -ml-2 -mt-2 transform -rotate-2 inline-block">why</span> you're here
            </h2>
          </div>

          <div className="w-full lg:w-[60%]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-0">
              {symptoms.map((symptom, index) => (
                <div key={index} className="py-5 border-b border-gray-200 text-[15px] text-[#5A6360] font-light tracking-wide">
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
