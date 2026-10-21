import { useState } from "react";
import { faqs } from "@/mocks/site";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="w-full bg-background-100 py-16 md:py-24 scroll-mt-20">
      <div className="w-full px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center">
            <span className="font-label text-xs font-semibold uppercase tracking-widest text-accent-700">
              Preguntas frecuentes
            </span>
            <h2 className="mt-3 font-heading text-3xl md:text-4xl font-semibold text-foreground-900">
              Resolvemos sus dudas
            </h2>
          </div>

          <div className="mt-10 flex flex-col gap-3">
            {faqs.map((faq, index) => {
              const open = openIndex === index;
              return (
                <div
                  key={faq.question}
                  className="rounded-lg border border-background-200 bg-background-50 overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : index)}
                    className="w-full flex items-center justify-between gap-4 px-5 md:px-6 py-4 text-left cursor-pointer"
                  >
                    <span className="font-label text-sm md:text-base font-semibold text-foreground-900">
                      {faq.question}
                    </span>
                    <span className="flex items-center justify-center w-6 h-6 shrink-0 text-accent-700">
                      <i
                        className={`ri-arrow-down-s-line text-xl transition-transform duration-300 ${
                          open ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                  </button>
                  {open && (
                    <div className="px-5 md:px-6 pb-5 font-body text-sm leading-relaxed text-foreground-600">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}