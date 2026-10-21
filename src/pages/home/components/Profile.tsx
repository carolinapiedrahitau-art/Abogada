import { siteInfo } from "@/mocks/site";
import WhatsAppButton from "@/components/feature/WhatsAppButton";

export default function Profile() {
  const details = [
    { icon: "ri-user-3-line", label: "Nombre", value: siteInfo.name },
    { icon: "ri-briefcase-line", label: "Profesión", value: siteInfo.role },
    { icon: "ri-id-card-line", label: "Tarjeta profesional", value: siteInfo.license },
    { icon: "ri-map-pin-line", label: "Ubicación", value: siteInfo.city },
  ];

  return (
    <section id="perfil" className="w-full bg-background-50 py-16 md:py-24 scroll-mt-20">
      <div className="w-full px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative w-full h-[360px] md:h-[500px] rounded-lg overflow-hidden order-last lg:order-first">
            <img
              src="https://storage.helloreaddy.io/project_files/bb9c7809-677b-443c-82d9-a6745f381052/58c949de-0376-43c8-be75-414abf80b357_compressed_CarolinaGonzalez.webp"
              alt="Carolina González, abogada en Dosquebradas, Risaralda"
              title="Perfil profesional de Carolina González"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
          </div>

          <div>
            <span className="font-label text-xs font-semibold uppercase tracking-widest text-accent-700">
              Perfil profesional
            </span>
            <h2 className="mt-3 font-heading text-3xl md:text-4xl font-semibold text-foreground-900">
              Ejerzo el Derecho con Fe, Justicia y Propósito
            </h2>
            <p className="mt-4 font-body text-base leading-relaxed text-foreground-600">
              Soy {siteInfo.name}, abogada especialista en Derecho Penal, con una
              experiencia de {siteInfo.experienceYears} años en el ámbito
              profesional, ubicada en {siteInfo.city}. Brindo orientación y
              acompañamiento jurídico en asuntos civiles, familiares,
              inmobiliarios, notariales y penales. Mi propósito es ayudar a las
              personas a comprender sus opciones, conocer los requisitos aplicables
              y tomar decisiones informadas frente a sus necesidades jurídicas.
            </p>

            <dl className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {details.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-3 rounded-md bg-background-100 border border-background-200 px-4 py-3"
                >
                  <span className="flex items-center justify-center w-9 h-9 rounded-md bg-secondary-600 text-background-50 shrink-0">
                    <i className={`${item.icon} text-lg`} />
                  </span>
                  <div>
                    <dt className="font-label text-xs uppercase tracking-wider text-foreground-500">
                      {item.label}
                    </dt>
                    <dd className="font-body text-sm font-medium text-foreground-900">
                      {item.value}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>

            <div className="mt-8">
              <WhatsAppButton label="Solicitar una consulta" variant="gold" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}