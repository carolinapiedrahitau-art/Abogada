import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import { legalSections, siteInfo } from "@/mocks/site";

export default function Legal() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [location.hash]);

  return (
    <main className="min-h-screen bg-background-50">
      <Navbar />

      <section className="w-full bg-primary-950 pt-28 md:pt-40 pb-14 md:pb-20">
        <div className="w-full px-4 md:px-8">
          <div className="max-w-3xl">
            <span className="font-label text-xs font-semibold uppercase tracking-widest text-accent-400">
              Información legal
            </span>
            <h1 className="mt-3 font-heading text-4xl md:text-5xl font-semibold text-background-50">
              Textos legales
            </h1>
            <p className="mt-4 font-body text-base leading-relaxed text-background-200/85">
              Los siguientes textos son editables y deben revisarse antes de
              publicar para reflejar las prácticas reales de tratamiento de datos y
              atención profesional.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-background-50 py-14 md:py-20">
        <div className="w-full px-4 md:px-8">
          <div className="max-w-3xl mx-auto flex flex-col gap-10">
            {legalSections.map((section) => (
              <article
                key={section.id}
                id={section.id}
                className="scroll-mt-24 rounded-lg border border-background-200 bg-background-50 p-6 md:p-8"
              >
                <h2 className="font-heading text-2xl font-semibold text-foreground-900">
                  {section.title}
                </h2>
                <div className="mt-4 flex flex-col gap-3">
                  {section.paragraphs.map((p, i) => (
                    <p key={i} className="font-body text-sm leading-relaxed text-foreground-600">
                      {p}
                    </p>
                  ))}
                </div>
              </article>
            ))}

            <p className="font-body text-xs text-foreground-400">
              {siteInfo.name}, {siteInfo.role} · Tarjeta profesional {siteInfo.license} ·{" "}
              {siteInfo.city}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}