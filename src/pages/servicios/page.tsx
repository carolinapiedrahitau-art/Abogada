import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import HowItWorks from "@/pages/home/components/HowItWorks";
import ContactSection from "@/pages/home/components/ContactSection";
import ServiceCard from "./components/ServiceCard";
import { serviceCategories } from "@/mocks/site";

export default function Servicios() {
  return (
    <main className="min-h-screen bg-background-50">
      <Navbar />

      <section className="w-full bg-primary-950 pt-28 md:pt-40 pb-16 md:pb-24">
        <div className="w-full px-4 md:px-8">
          <div className="max-w-3xl">
            <span className="font-label text-xs font-semibold uppercase tracking-widest text-accent-400">
              Portafolio de servicios
            </span>
            <h1 className="mt-3 font-heading text-4xl md:text-5xl font-semibold text-background-50">
              Servicios jurídicos con orientación clara
            </h1>
            <p className="mt-4 font-body text-base md:text-lg leading-relaxed text-background-200/85">
              Cada servicio se presenta de forma responsable. La información es
              orientativa; los requisitos y el alcance dependen de las
              circunstancias particulares de cada caso.
            </p>
          </div>
        </div>
      </section>

      {serviceCategories.map((category, idx) => (
        <section
          key={category.id}
          className={`w-full py-16 md:py-20 ${
            idx % 2 === 0 ? "bg-background-50" : "bg-background-100"
          }`}
        >
          <div className="w-full px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-start gap-4 max-w-3xl">
                <span className="flex items-center justify-center w-12 h-12 rounded-md bg-primary-800 text-accent-400 shrink-0">
                  <i className={`${category.icon} text-2xl`} />
                </span>
                <div>
                  <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground-900">
                    {category.title}
                  </h2>
                  <p className="mt-2 font-body text-sm md:text-base text-foreground-600">
                    {category.intro}
                  </p>
                </div>
              </div>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                {category.services.map((service) => (
                  <ServiceCard
                    key={service.name}
                    name={service.name}
                    description={service.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="w-full bg-background-100 py-8 md:py-10">
        <div className="w-full px-4 md:px-8">
          <div className="max-w-7xl mx-auto rounded-lg border border-accent-300 bg-accent-50 p-5 md:p-6 flex items-start gap-3">
            <span className="flex items-center justify-center w-6 h-6 shrink-0 mt-0.5 text-accent-700">
              <i className="ri-information-line text-xl" />
            </span>
            <p className="font-body text-sm leading-relaxed text-foreground-700">
              No se garantizan absoluciones, libertad inmediata, éxito judicial ni
              resultados determinados. El alcance de cada servicio se acuerda según
              las condiciones del caso.
            </p>
          </div>
        </div>
      </section>

      <HowItWorks />
      <ContactSection />
      <Footer />
    </main>
  );
}