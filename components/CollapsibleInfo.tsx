"use client";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState } from "react";

interface Section {
  id: string;
  imageUrl: string;
}

export default function CollapsibleInfo() {
  const [openSection, setOpenSection] = useState<string>("alzheimers");

  const sections: Section[] = [
    { id: "alzheimers", imageUrl: "/conditions/alzheimers.jpg" },
    { id: "parkinsons", imageUrl: "/conditions/parkinsons.jpg" },
    { id: "msa", imageUrl: "/conditions/msa.jpg" },
  ];

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-8 items-start">
      {/* Text Content */}
      <div
        className="w-full lg:w-1/2 space-y-4"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        {sections.map((section) => (
          <div key={section.id} className="border-b border-gray-200">
            <button
              type="button"
              onClick={() => setOpenSection(section.id)}
              className="w-full py-4 flex items-center justify-between text-left"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {section.id === "alzheimers" ? "阿尔茨海默病" : section.id === "parkinsons" ? "帕金森病" : "多系统萎缩"}
              </h3>
              <ChevronDownIcon
                className={`w-5 h-5 transition-transform ${
                  openSection === section.id ? "transform rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openSection === section.id ? "max-h-96" : "max-h-0"
              }`}
            >
              <p className="pb-4 text-gray-600">
                {section.id === "alzheimers" ? "阿尔茨海默病是一种进行性脑部疾病，会导致记忆丧失和认知能力下降。" : section.id === "parkinsons" ? "帕金森病是一种慢性神经系统疾病，会导致肌肉僵硬和运动障碍。" : "多系统萎缩是一种神经系统疾病，会导致肌肉僵硬和运动障碍。"}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Image Section */}
      <div
        className="w-full lg:w-1/2 relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        {sections.map((section) => (
          <div
            key={section.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              openSection === section.id ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={section.imageUrl}
              alt={section.id === "alzheimers" ? "阿尔茨海默病" : section.id === "parkinsons" ? "帕金森病" : "多系统萎缩"}
              fill
              className="object-cover"
              priority={section.id === "alzheimers"}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
