import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navigationLinks, siteInfo } from "@/mocks/site";
import WhatsAppButton from "./WhatsAppButton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const onHome = location.pathname === "/";
  const light = !scrolled && onHome && !menuOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const isAnchor = (href: string) => href.includes("#");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-background-50/95 backdrop-blur border-b border-background-200"
          : "bg-transparent"
      }`}
    >
      <nav className="w-full px-4 md:px-8 h-16 md:h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 cursor-pointer">
          <span
            className={`flex items-center justify-center w-10 h-10 rounded-md border transition-colors duration-300 ${
              light
                ? "border-accent-400/70 text-accent-300"
                : "border-accent-500/50 text-accent-600"
            }`}
          >
            <i className="ri-scales-3-line text-xl" />
          </span>
          <span className="flex flex-col leading-tight">
            <span
              className={`font-heading text-lg font-semibold tracking-tight transition-colors duration-300 ${
                light ? "text-background-50" : "text-foreground-900"
              }`}
            >
              {siteInfo.name}
            </span>
            <span
              className={`font-label text-[11px] tracking-wider uppercase transition-colors duration-300 ${
                light ? "text-background-200/80" : "text-foreground-500"
              }`}
            >
              {siteInfo.role}
            </span>
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navigationLinks.map((link) => {
            const active = location.pathname === link.href;
            const className = `font-label text-sm font-medium transition-colors duration-200 cursor-pointer ${
              active
                ? light
                  ? "text-accent-300"
                  : "text-accent-700"
                : light
                  ? "text-background-100/85 hover:text-accent-300"
                  : "text-foreground-700 hover:text-accent-700"
            }`;
            return isAnchor(link.href) ? (
              <a key={link.href} href={link.href} className={className}>
                {link.label}
              </a>
            ) : (
              <Link key={link.href} to={link.href} className={className}>
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:flex items-center">
          <WhatsAppButton label="Solicitar consulta" size="sm" variant={light ? "light" : "gold"} />
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Abrir menú"
          className={`lg:hidden flex items-center justify-center w-10 h-10 rounded-md cursor-pointer transition-colors duration-300 ${
            light ? "text-background-50" : "text-foreground-900"
          }`}
        >
          <i className={menuOpen ? "ri-close-line text-2xl" : "ri-menu-line text-2xl"} />
        </button>
      </nav>

      {menuOpen && (
        <div className="lg:hidden bg-background-50 border-b border-background-200 px-4 py-5">
          <div className="flex flex-col gap-1">
            {navigationLinks.map((link) => {
              const className =
                "font-label text-base font-medium px-3 py-3 rounded-md cursor-pointer text-foreground-800 hover:bg-background-100";
              return isAnchor(link.href) ? (
                <a key={link.href} href={link.href} className={className}>
                  {link.label}
                </a>
              ) : (
                <Link key={link.href} to={link.href} className={className}>
                  {link.label}
                </Link>
              );
            })}
          </div>
          <div className="mt-4">
            <WhatsAppButton className="w-full" />
          </div>
        </div>
      )}
    </header>
  );
}