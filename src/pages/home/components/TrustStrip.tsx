import { trustValues } from "@/mocks/site";

export default function TrustStrip() {
  return (
    <section className="w-full bg-background-100 py-10 md:py-14 border-b border-background-200">
      <div className="w-full px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6">
          {trustValues.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-4 rounded-lg bg-background-50 border border-background-200 p-5 md:p-6"
            >
              <span className="flex items-center justify-center w-11 h-11 rounded-md bg-primary-800 text-accent-400 shrink-0">
                <i className={`${item.icon} text-xl`} />
              </span>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground-900">
                  {item.title}
                </h3>
                <p className="mt-1 font-body text-sm leading-relaxed text-foreground-600">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}