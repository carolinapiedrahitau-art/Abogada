import { Link } from "react-router-dom";
import { siteInfo } from "@/mocks/site";
import WhatsAppButton from "@/components/feature/WhatsAppButton";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[640px] md:min-h-[760px] flex items-center overflow-hidden">
      <img
        src="https://readdy.ai/api/search-image?query=Elegant%20sophisticated%20law%20office%20interior%20in%20deep%20navy%20blue%20and%20warm%20beige%20tones%20with%20soft%20golden%20light%2C%20blurred%20bookshelves%20and%20minimal%20refined%20composition%2C%20calm%20trustworthy%20professional%20atmosphere%2C%20no%20people%2C%20editorial%20photography&width=1920&height=1080&seq=cg-hero-bg-01&orientation=landscape"
        alt="Despacho jurídico elegante en tonos azul marino y beige"
        title="Carolina González Abogada en Dosquebradas"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-950/95 via-primary-950/82 to-primary-900/55" />

      <div className="relative z-10 w-full px-4 md:px-8 py-28 md:py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-background-50/10 border border-accent-400/40 px-4 py-1.5 font-label text-xs md:text-sm font-medium text-accent-200">
              <i className="ri-award-line text-accent-400" />
              {siteInfo.tagline}
            </span>

            <h1 className="mt-6 font-heading text-4xl md:text-6xl font-semibold leading-tight text-background-50">
              Ejerzo el Derecho con Fe, Justicia y Propósito
            </h1>

            <p className="mt-4 font-label text-base md:text-lg text-accent-200/90">
              {siteInfo.name} &nbsp;|&nbsp; {siteInfo.role} en {siteInfo.city}
            </p>

            <p className="mt-5 font-body text-base md:text-lg leading-relaxed text-background-200/90 max-w-2xl">
              Cada situación jurídica merece ser escuchada y analizada con
              responsabilidad. Recibe orientación profesional en asuntos civiles,
              familiares, inmobiliarios y penales, con atención personalizada y
              comunicación clara.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 md:gap-4">
              <WhatsAppButton label="Solicitar una consulta" size="lg" variant="gold" />
              <Link
                to="/servicios"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-background-50/40 px-7 py-4 font-label font-semibold text-background-50 hover:bg-background-50 hover:text-primary-900 transition-colors duration-200 cursor-pointer whitespace-nowrap"
              >
                Conocer mis servicios
                <i className="ri-arrow-right-line" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 animate-fade-up animate-delay-200">
            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute -inset-3 rounded-lg border border-accent-400/30" />
              <div className="relative w-full h-[420px] md:h-[480px] rounded-lg overflow-hidden">
                <img
                  src="https://storage.helloreaddy.io/project_files/bb9c7809-677b-443c-82d9-a6745f381052/58c949de-0376-43c8-be75-414abf80b357_compressed_CarolinaGonzalez.webp"
                  alt="Retrato profesional de la abogada Carolina González"
                  title="Carolina González Abogada en Dosquebradas"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}