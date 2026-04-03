"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { HOTEL_IMAGES } from "@/constants/hotel-info";

export default function HeroSlideshow() {
  // Initialize Embla with loop and 4-second autoplay
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000 })]);

  return (
    <section className="overflow-hidden w-full h-[100vh] relative" ref={emblaRef}>
      <div className="flex h-full">
        {HOTEL_IMAGES.map((src, index) => (
          <div key={index} className="flex-[0_0_100%] min-w-0 h-full relative">
            <img
              src={src}
              alt={`Hotel View ${index + 1}`}
              className="w-full h-full object-cover brightness-75"
            />
            {/* Optional Overlay Text */}
            <div className="absolute inset-0 flex items-center justify-center text-center text-white p-6">
              <h2 className="text-4xl md:text-6xl font-bold uppercase drop-shadow-lg">
                Experience Grandeur
              </h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
