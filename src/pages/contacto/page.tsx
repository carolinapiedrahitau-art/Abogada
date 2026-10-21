import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import WhatsAppButton from "@/components/feature/WhatsAppButton";
import ContactForm from "./components/ContactForm";
import { siteInfo } from "@/mocks/site";
import { WHATSAPP_DISPLAY } from "@/utils/whatsapp";

const contactCards = [
  { icon: "ri-user-3-line", label: "Nombre", value: `${siteInfo.name} · ${siteInfo.role}` },
  { icon: "ri-id-card-line", label: "Tarjeta profesional", value: siteInfo.license },
  { icon: "ri-map-pin-line", label: "Ubicación", value: siteInfo.city },
];

export default function Contacto() {
  return (
    <main className="min-h-screen bg-background-50">
      <Navbar />

      <section className="w-full bg-primary-950 pt-28 md:pt-40 pb-16 md:pb-24">
        <div className="w-full px-4 md:px-8">
          <div className="max-w-3xl">
            <span className="font-label text-xs font-semibold uppercase tracking-widest text-accent-400">
              Contacto
            </span>
            <h1 className="mt-3 font-heading text-4xl md:text-5xl font-semibold text-background-50">
              Hablemos sobre su situación jurídica
            </h1>
            <p className="mt-4 font-body text-base md:text-lg leading-relaxed text-background-200/85">
              Solicite información sobre los servicios jurídicos y consulte la
              posibilidad de agendar una cita.
            </p>
          </div>
        </div>
      </section>

      {/* WhatsApp highlight */}
      <section className="w-full bg-background-50 pt-12 md:pt-16">
        <div className="w-full px-4 md:px-8">
          <div className="max-w-7xl mx-auto rounded-lg bg-primary-900 p-6 md:p-9 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <span className="flex items-center justify-center w-14 h-14 rounded-md bg-accent-500 text-primary-950 shrink-0">
                <i className="ri-whatsapp-line text-3xl" />
              </span>
              <div>
                <h2 className="font-heading text-xl md:text-2xl font-semibold text-background-50">
                  Atención directa por WhatsApp
                </h2>
                <p className="mt-2 font-body text-sm md:text-base text-background-200/85 max-w-xl">
                  Escriba al <strong>{WHATSAPP_DISPLAY}</strong> para solicitar
                  información y coordinar la posibilidad de una consulta.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <WhatsAppButton label="Abrir WhatsApp" size="lg" variant="gold" />
              <a
                href="tel:+573104633110"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-background-50/50 px-6 py-4 font-label font-semibold text-background-50 hover:bg-background-50 hover:text-primary-900 transition-colors duration-200 cursor-pointer whitespace-nowrap"
              >
                <i className="ri-phone-line text-lg" />
                Llamar
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-background-50 py-14 md:py-20">
        <div className="w-full px-4 md:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground-900">
                Información de contacto
              </h2>
              <p className="mt-3 font-body text-sm leading-relaxed text-foreground-600">
                Con gusto atiendo sus consultas sobre cualquiera de los servicios
                jurídicos.
              </p>

              <div className="mt-8 flex flex-col gap-4">
                {contactCards.map((card) => (
                  <div
                    key={card.label}
                    className="flex items-start gap-4 rounded-lg border border-background-200 bg-background-50 p-5"
                  >
                    <span className="flex items-center justify-center w-11 h-11 rounded-md bg-secondary-600 text-background-50 shrink-0">
                      <i className={`${card.icon} text-xl`} />
                    </span>
                    <div>
                      <p className="font-label text-xs uppercase tracking-wider text-foreground-500">
                        {card.label}
                      </p>
                      <p className="font-body text-sm md:text-base text-foreground-900">
                        {card.value}
                      </p>
                    </div>
                  </div>
                ))}

                <div className="flex items-start gap-4 rounded-lg border border-background-200 bg-background-50 p-5">
                  <span className="flex items-center justify-center w-11 h-11 rounded-md bg-accent-500 text-primary-950 shrink-0">
                    <i className="ri-phone-line text-xl" />
                  </span>
                  <div>
                    <p className="font-label text-xs uppercase tracking-wider text-foreground-500">
                      Teléfono y WhatsApp
                    </p>
                    <a
                      href="tel:+573104633110"
                      className="font-body text-sm md:text-base text-foreground-900 hover:text-accent-700 transition-colors duration-200 cursor-pointer"
                    >
                      {siteInfo.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>

              <p className="mt-6 font-body text-xs leading-relaxed text-foreground-400">
                Correo electrónico y dirección profesional se publicarán únicamente
                cuando sean confirmados.
              </p>
            </div>

            <div className="lg:col-span-3">
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground-900">
                Envíe un mensaje
              </h2>
              <p className="mt-3 mb-6 font-body text-sm leading-relaxed text-foreground-600">
                Complete el formulario con el motivo general de su consulta.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}