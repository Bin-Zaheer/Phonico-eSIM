"use client";

import Autoplay from "embla-carousel-autoplay";
import { Star } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Frequent Traveler",
    review:
      "Phonico made my trip to the USA so much easier. I activated my eSIM within minutes and had reliable internet everywhere I went.",
  },
  {
    name: "Michael Brown",
    role: "Digital Nomad",
    review:
      "I travel a lot for work and Phonico has become my go-to eSIM. The setup was extremely simple and the connection was fast.",
  },
  {
    name: "Emma Wilson",
    role: "Traveler",
    review:
      "No more searching for local SIM cards when I travel. I bought my plan online, scanned the QR code and was connected immediately.",
  },
  {
    name: "James Anderson",
    role: "Business Traveler",
    review:
      "The activation process was incredibly easy. I was connected as soon as I landed and didn't have to worry about finding a local SIM.",
  },
  {
    name: "Olivia Davis",
    role: "Tourist",
    review:
      "Great service and very convenient. I used Phonico throughout my trip and the connection remained stable.",
  },
  {
    name: "Daniel Wilson",
    role: "Digital Nomad",
    review:
      "Phonico saved me from expensive roaming charges. The pricing is simple and the setup takes just a few minutes.",
  },
  {
    name: "Sophia Miller",
    role: "Frequent Traveler",
    review:
      "I have used several eSIM providers, but Phonico has been one of the easiest experiences so far.",
  },
];

export default function Testimonials() {
  const autoplay = Autoplay({
    delay: 3000,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  });

  return (
    <div className="w-full min-w-0 overflow-hidden px-1 min-[350px]:px-2 sm:px-0">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[autoplay]}
        className="w-full min-w-0"
      >
        <CarouselContent className="-ml-2 sm:-ml-3">
          {testimonials.map((testimonial) => (
            <CarouselItem
              key={testimonial.name}
              className="min-w-0 basis-full pl-2 min-[500px]:basis-[90%] sm:pl-3 md:basis-1/2 lg:basis-1/3"
            >
              <div className="flex h-full min-h-[210px] min-w-0 flex-col overflow-hidden rounded-xl border border-gray-100 bg-white p-3 shadow-sm transition-all duration-300 sm:min-h-[230px] sm:rounded-2xl sm:p-4 md:min-h-[250px] md:p-6">
                <div className="mb-2 flex shrink-0 gap-0.5 min-[350px]:gap-1 sm:mb-4">
                  {Array.from({ length: 5 }).map(
                    (_, index) => (
                      <Star
                        key={index}
                        size={15}
                        className="fill-[#f5b942] text-[#f5b942] min-[350px]:h-4 min-[350px]:w-4 sm:h-[17px] sm:w-[17px]"
                      />
                    ),
                  )}
                </div>

                <p className="min-w-0 flex-1 break-words text-[11px] leading-4 text-gray-600 min-[350px]:text-[13px] min-[350px]:leading-5 sm:text-sm sm:leading-6 2xl:text-base 2xl:leading-7">
                  “{testimonial.review}”
                </p>

                <div className="mt-3 shrink-0 border-t border-gray-100 pt-2 min-[350px]:mt-4 min-[350px]:pt-3">
                  <h3 className="truncate text-xs font-semibold text-gray-900 min-[350px]:text-sm sm:text-base">
                    {testimonial.name}
                  </h3>

                  <p className="truncate text-[10px] text-gray-500 min-[350px]:text-xs sm:text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
