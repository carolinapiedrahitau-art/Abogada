import { Link } from "react-router-dom";
import { practiceAreas } from "@/mocks/site";

export default function AreasPreview() {
  return (
    <section className="w-full bg-background-100 py-16 md:py-24">
      <div className="w-full px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <span className="font-label text-xs font-semibold uppercase tracking-widest text-accent-700">
              Áreas de práctica
            </span>
            <h2 className="mt-3 font-heading text-3xl md:text-4xl font-semibold text-foreground-900">
              Orientación jurídica en las áreas que más lo necesitan
            </h2>
            <p className="mt-4 font-body text-base leading-relaxed text-foreground-600">
              Acompaño a las personas en asuntos civiles, de familia,
              inmobiliarios, notariales y penales, con un trato cercano y claro.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {practiceAreas.map((area) => (
              <article
                key={area.id}
                className="group flex flex-col rounded-lg border border-background-200 bg-background-50 p-6 md:p-7 transition-colors duration-300 hover:border-accent-400"
              >
                <span className="flex items-center justify-center w-12 h-12 rounded-md bg-primary-800 text-accent-400">
                  <i className={`${area.icon} text-2xl`} />
                </span>
                <h3 className="mt-5 font-heading text-xl font-semibold text-foreground-900">
                  {area.title}
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-foreground-600 flex-1">
                  {area.text}
                </p>
                <Link
                  to="/servicios"
                  className="mt-5 inline-flex items-center gap-2 font-label text-sm font-semibold text-accent-700 hover:text-accent-800 transition-colors duration-200 cursor-pointer"
                >
                  Ver servicios
                  <i className="ri-arrow-right-line" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}