import { Link } from "react-router-dom";
import { legalSections, navigationLinks, siteInfo } from "@/mocks/site";
import { buildWhatsAppLink, WHATSAPP_DISPLAY } from "@/utils/whatsapp";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-950 text-background-100">
      <div className="w-full px-4 md:px-8 py-14 md:py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-md border border-accent-500/50 text-accent-400">
                <i className="ri-scales-3-line text-xl" />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-heading text-lg font-semibold text-background-50">
                  {siteInfo.name}
                </span>
                <span className="font-label text-[11px] tracking-wider uppercase text-background-200/70">
                  {siteInfo.role}
                </span>
              </span>
            </div>
            <p className="font-body text-sm leading-relaxed text-background-200/75 max-w-xs">
              Tarjeta profesional {siteInfo.license}. {siteInfo.city}.
            </p>
          </div>

          <div>
            <h4 className="font-label text-xs font-semibold uppercase tracking-wider text-accent-400 mb-4">
              Navegación
            </h4>
            <ul className="flex flex-col gap-3">
              {navigationLinks.map((link) =>
                link.href.includes("#") ? (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="font-body text-sm text-background-200/80 hover:text-background-50 transition-colors duration-200 cursor-pointer"
                    >
                      {link.label}
                    </a>
                  </li>
                ) : (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="font-body text-sm text-background-200/80 hover:text-background-50 transition-colors duration-200 cursor-pointer"
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-label text-xs font-semibold uppercase tracking-wider text-accent-400 mb-4">
              Legal
            </h4>
            <ul className="flex flex-col gap-3">
              {legalSections.map((section) => (
                <li key={section.id}>
                  <Link
                    to={`/legal#${section.id}`}
                    className="font-body text-sm text-background-200/80 hover:text-background-50 transition-colors duration-200 cursor-pointer"
                  >
                    {section.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-label text-xs font-semibold uppercase tracking-wider text-accent-400 mb-4">
              Contacto
            </h4>
            <ul className="flex flex-col gap-3 font-body text-sm text-background-200/80">
              <li className="flex items-start gap-2.5">
                <span className="flex items-center justify-center w-5 h-5 shrink-0 mt-0.5">
                  <i className="ri-map-pin-line text-base text-accent-400" />
                </span>
                <span>{siteInfo.city}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="flex items-center justify-center w-5 h-5 shrink-0 mt-0.5">
                  <i className="ri-phone-line text-base text-accent-400" />
                </span>
                <a
                  href="tel:+573104633110"
                  className="hover:text-background-50 transition-colors duration-200 cursor-pointer"
                >
                  {siteInfo.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="flex items-center justify-center w-5 h-5 shrink-0 mt-0.5">
                  <i className="ri-whatsapp-line text-base text-accent-400" />
                </span>
                <a
                  href={buildWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-background-50 transition-colors duration-200 cursor-pointer"
                >
                  WhatsApp {WHATSAPP_DISPLAY}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-background-50/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-background-200/70">
            © {year} {siteInfo.name}, {siteInfo.role}. Todos los derechos reservados.
          </p>
          <p className="font-body text-xs text-background-200/60">
            Tarjeta profesional {siteInfo.license}
          </p>
        </div>
      </div>
    </footer>
  );
}