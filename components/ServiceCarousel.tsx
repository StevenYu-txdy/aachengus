"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaPlus, FaTimes } from "react-icons/fa";

interface Service {
  id: string;
  titleKey: string;
  subtitleKey: string;
  descKey: string;
  detailKey: string;
  img: string;
}

const services: Service[] = [
  {
    id: "security",
    titleKey: "security.title",
    subtitleKey: "security.subtitle",
    descKey: "security.desc",
    detailKey: "security.detail",
    img: "/services/security.jpg",
  },
  {
    id: "comfort",
    titleKey: "comfort.title",
    subtitleKey: "comfort.subtitle",
    descKey: "comfort.desc",
    detailKey: "comfort.detail",
    img: "/services/comfort.jpg",
  },
  {
    id: "advantage",
    titleKey: "advantage.title",
    subtitleKey: "advantage.subtitle",
    descKey: "advantage.desc",
    detailKey: "advantage.detail",
    img: "/services/advantage.jpg",
  },
  {
    id: "individuality",
    titleKey: "individuality.title",
    subtitleKey: "individuality.subtitle",
    descKey: "individuality.desc",
    detailKey: "individuality.detail",
    img: "/services/individuality.jpg",
  },
  {
    id: "enjoyment",
    titleKey: "enjoyment.title",
    subtitleKey: "enjoyment.subtitle",
    descKey: "enjoyment.desc",
    detailKey: "enjoyment.detail",
    img: "/services/enjoyment.jpg",
  },
  {
    id: "environment",
    titleKey: "environment.title",
    subtitleKey: "environment.subtitle",
    descKey: "environment.desc",
    detailKey: "environment.detail",
    img: "/services/environment.jpg",
  },
];

export default function ServiceCarousel() {
  const [openId, setOpenId] = useState<string | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (openId) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [openId]);

  const scrollLeft = useCallback(() => {
    const slider = document.getElementById("service-slider");
    if (slider) slider.scrollBy({ left: -300, behavior: "smooth" });
  }, []);

  const scrollRight = useCallback(() => {
    const slider = document.getElementById("service-slider");
    if (slider) slider.scrollBy({ left: 300, behavior: "smooth" });
  }, []);

  // Auto scroll after modal close (except for the first card)
  useEffect(() => {
    if (!openId) {
      const currentIndex = services.findIndex((s) => s.id === openId);
      if (currentIndex > 0) {
        const timer = setTimeout(scrollRight, 300);
        return () => clearTimeout(timer);
      }
    }
  }, [openId, scrollRight]);

  const handleModalClose = () => {
    setOpenId(null);
  };

  return (
    <div className="relative w-full">
      {/* Container with max width and padding */}
      <div className="max-w-[95vw] xl:max-w-8xl 2xl:max-w-9xl mx-auto">
        {/* Horizontally Scrollable */}
        <div
          id="service-slider"
          className="flex space-x-6 overflow-x-auto scrollbar-hide px-4 py-2 mb-24"
        >
          {services.map((svc) => (
            <div
              key={svc.id}
              className="relative min-w-[240px] md:min-w-[280px] lg:min-w-[320px] xl:min-w-[300px] 2xl:min-w-[280px] aspect-[9/16] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 group"
              data-aos="fade-left"
            >
              {/* Background Image with hover effect wrapper */}
              <div className="absolute inset-0 transition-transform duration-500 ease-out transform group-hover:scale-[1.02]">
                <Image
                  src={svc.img}
                  alt={svc.titleKey}
                  fill
                  className="object-cover opacity-80"
                />
                {/* Content Overlay */}
                <div className="absolute inset-0 bg-black/40 p-6 flex flex-col justify-between">
                  {/* Text Content */}
                  <div className="text-white">
                    <h4 className="text-sm font-medium mb-4">
                      {svc.titleKey}
                    </h4>
                    <h3 className="text-2xl font-bold mb-2">
                      {svc.subtitleKey}
                    </h3>
                    <p className="text-lg">{svc.descKey}</p>
                  </div>
                  {/* "+" Button */}
                  <button
                    type="button"
                    onClick={() => setOpenId(svc.id)}
                    className="self-end bg-white text-gray-800 rounded-full p-3 shadow-lg hover:bg-gray-100 transition-all duration-300 hover:scale-110"
                    aria-label={`View details for ${svc.titleKey}`}
                  >
                    <FaPlus size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls - Moved further down */}
        <div className="absolute -bottom-12 right-4 flex gap-3">
          <button
            type="button"
            onClick={scrollLeft}
            className="bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-all duration-300"
            aria-label="Scroll Left"
          >
            <FaChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={scrollRight}
            className="bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-all duration-300"
            aria-label="Scroll Right"
          >
            <FaChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Modal for Details */}
      {openId && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center overflow-y-auto p-4">
          <button
            type="button"
            className="absolute inset-0 w-full h-full bg-transparent"
            onClick={handleModalClose}
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                handleModalClose();
              }
            }}
          />
          <dialog
            open
            className="relative bg-white rounded-xl max-w-3xl w-full mx-auto my-8 overflow-hidden shadow-2xl animate-modalOpen"
            data-aos="zoom-in"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={handleModalClose}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 transition-all duration-300 hover:scale-110 z-10"
              aria-label="Close modal"
            >
              <FaTimes size={20} />
            </button>
            <div className="p-8 max-h-[80vh] overflow-y-auto">
              {services
                .filter((s) => s.id === openId)
                .map((s) => (
                  <div key={s.id}>
                    <h4 className="text-sm font-medium text-gray-600 mb-2">
                      {s.titleKey}
                    </h4>
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">
                      {s.subtitleKey}
                    </h2>
                    <p className="text-xl text-gray-700 mb-6">
                      {s.descKey}
                    </p>
                    <div className="mt-6 mb-6 overflow-hidden w-full aspect-video rounded-lg relative">
                      <Image
                        src={s.img}
                        alt={s.titleKey}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="mt-4 text-gray-700 whitespace-pre-line text-lg leading-relaxed">
                      {s.detailKey}
                    </p>
                  </div>
                ))}
            </div>
          </dialog>
        </div>
      )}
    </div>
  );
}
