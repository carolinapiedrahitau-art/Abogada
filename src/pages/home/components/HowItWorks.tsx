import { consultationSteps } from "@/mocks/site";

export default function HowItWorks() {
  return (
    <section className="w-full bg-background-50 py-16 md:py-24">
      <div className="w-full px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <span className="font-label text-xs font-semibold uppercase tracking-widest text-accent-700">
              ¿Cómo funciona la consulta?
            </span>
            <h2 className="mt-3 font-heading text-3xl md:text-4xl font-semibold text-foreground-900">
              Un proceso sencillo y claro
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {consultationSteps.map((item) => (
              <div
                key={item.step}
                className="relative rounded-lg border border-background-200 bg-background-100 p-6 md:p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="flex items-center justify-center w-12 h-12 rounded-md bg-primary-800 text-accent-400">
                    <i className={`${item.icon} text-2xl`} />
                  </span>
                  <span className="font-heading text-4xl font-semibold text-accent-500/70">
                    {item.step}
                  </span>
                </div>
                <h3 className="mt-5 font-heading text-lg font-semibold text-foreground-900">
                  {item.title}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-foreground-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center font-body text-sm text-foreground-500 max-w-2xl mx-auto">
            El contacto inicial no constituye por sí mismo aceptación formal de
            representación legal.
          </p>
        </div>
      </div>
    </section>
  );
}