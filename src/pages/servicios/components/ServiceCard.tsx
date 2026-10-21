import { buildWhatsAppLink, buildServiceMessage } from "@/utils/whatsapp";

interface ServiceCardProps {
  name: string;
  description: string;
}

export default function ServiceCard({ name, description }: ServiceCardProps) {
  return (
    <article className="flex flex-col rounded-lg border border-background-200 bg-background-50 p-6 transition-colors duration-300 hover:border-accent-400">
      <div className="flex items-start gap-3">
        <span className="flex items-center justify-center w-9 h-9 rounded-md bg-accent-100 text-accent-700 shrink-0 mt-0.5">
          <i className="ri-check-double-line text-lg" />
        </span>
        <h3 className="font-heading text-lg font-semibold text-foreground-900">{name}</h3>
      </div>
      <p className="mt-3 font-body text-sm leading-relaxed text-foreground-600 flex-1">
        {description}
      </p>
      <a
        href={buildWhatsAppLink(buildServiceMessage(name))}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Consultar ${name} por WhatsApp`}
        className="mt-5 inline-flex items-center justify-center gap-2 rounded-md bg-primary-800 px-4 py-2.5 font-label text-sm font-semibold text-background-50 hover:bg-primary-900 transition-colors duration-200 cursor-pointer whitespace-nowrap"
      >
        <i className="ri-whatsapp-line text-base" />
        Consultar este servicio por WhatsApp
      </a>
    </article>
  );
}