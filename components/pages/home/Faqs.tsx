"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQdata } from "@/Types/type";
import { useState } from "react";

export default function Faqs(props: FAQdata) {
  const [color, setColor] = useState<number | null>(null);
  return (
    <section className="w-full overflow-hidden px-3 py-8 min-[350px]:px-4 min-[350px]:py-10 sm:px-6 sm:py-14 md:px-8 md:py-16 lg:px-18 lg:py-20">
      <div className="mx-auto w-full ">
        <div className="grid w-full grid-cols-1 gap-3 min-[350px]:gap-4 sm:gap-5 md:grid-cols-2">
          {props.data.map(
            (faq, index: number) => (
              <Accordion
                key={index}
                className="w-full min-w-0"
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="w-full min-w-0 rounded-xl bg-white min-[350px]:rounded-2xl "
                >
                  <AccordionTrigger
                    onClick={() => {
                      color === null
                        ? setColor(index)
                        : setColor(null);
                    }}
                    className="w-full  min-w-0 gap-2 py-4 text-left hover:no-underline min-[350px]:gap-3 sm:gap-4 sm:py-5"
                  >
                    <div
                      className={`flex shrink-0 items-center gap-2 min-[350px]:gap-3 sm:gap-4 ${color === index && "text-[#ef5b7a]"}`}
                    >
                      <span className="text-xl font-medium leading-none  min-[350px]:text-2xl sm:text-3xl md:text-4xl">
                        {index + 1}
                      </span>

                      <span
                        className={`h-7 w-px shrink-0 ${color === index ? "bg-[#ef5b7a]" : "bg-black"} min-[350px]:h-8 sm:h-10`}
                      />
                    </div>

                    <span className="min-w-0 flex-1 break-words pr-1 text-[13px] font-semibold leading-5 text-[#222222] min-[350px]:text-sm sm:text-base sm:leading-6 md:text-lg ">
                      {faq.question}
                    </span>
                  </AccordionTrigger>

                  <AccordionContent className="w-full min-w-0 px-10 pb-4 pt-3 text-[13px] leading-5  text-gray-500 min-[350px]:text-sm min-[350px]:leading-6  md:pb-5 md:text-base">
                    <span className="break-words">
                      {faq.answer()}
                    </span>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
