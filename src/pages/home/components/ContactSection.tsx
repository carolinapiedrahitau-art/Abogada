import { siteInfo } from "@/mocks/site";
import { WHATSAPP_DISPLAY } from "@/utils/whatsapp";
import WhatsAppButton from "@/components/feature/WhatsAppButton";

export default function ContactSection() {
  return (
    <section id="contacto" className="w-full bg-primary-950 py-16 md:py-24 scroll-mt-20">
      <div className="w-full px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <span className="font-label text-xs font-semibold uppercase tracking-widest text-accent-400">
              Contacto
            </span>
            <h2 className="mt-3 font-heading text-3xl md:text-4xl font-semibold text-background-50">
              Hablemos sobre su situación jurídica
            </h2>
            <p className="mt-4 font-body text-base leading-relaxed text-background-200/85 max-w-lg">
              Solicite información sobre los servicios jurídicos y consulte la
              posibilidad de agendar una cita. La forma más directa de contacto es
              por WhatsApp.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <WhatsAppButton label="Escribir por WhatsApp" size="lg" variant="gold" />
              <a
                href="tel:+573104633110"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-background-50/40 px-7 py-4 font-label font-semibold text-background-50 hover:bg-background-50 hover:text-primary-900 transition-colors duration-200 cursor-pointer whitespace-nowrap"
              >
                <i className="ri-phone-line text-lg" />
                Llamar
              </a>
            </div>
          </div>

          <div className="rounded-lg bg-background-50/5 border border-background-50/15 p-6 md:p-8">
            <h3 className="font-heading text-lg font-semibold text-background-50">
              {siteInfo.name}
            </h3>
            <p className="font-label text-sm text-accent-300 mb-5">
              {siteInfo.role} · Tarjeta profesional {siteInfo.license}
            </p>
            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-md bg-accent-500 text-primary-950 shrink-0">
                  <i className="ri-whatsapp-line text-xl" />
                </span>
                <div>
                  <p className="font-label text-xs uppercase tracking-wider text-background-300/70">
                    WhatsApp
                  </p>
                  <p className="font-body text-base text-background-50">{WHATSAPP_DISPLAY}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-md bg-accent-500 text-primary-950 shrink-0">
                  <i className="ri-phone-line text-xl" />
                </span>
                <div>
                  <p className="font-label text-xs uppercase tracking-wider text-background-300/70">
                    Teléfono
                  </p>
                  <a
                    href="tel:+573104633110"
                    className="font-body text-base text-background-50 hover:text-accent-300 transition-colors duration-200 cursor-pointer"
                  >
                    {siteInfo.phoneDisplay}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-md bg-accent-500 text-primary-950 shrink-0">
                  <i className="ri-map-pin-line text-xl" />
                </span>
                <div>
                  <p className="font-label text-xs uppercase tracking-wider text-background-300/70">
                    Ubicación
                  </p>
                  <p className="font-body text-base text-background-50">{siteInfo.city}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}