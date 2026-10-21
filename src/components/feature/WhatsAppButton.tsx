import { buildWhatsAppLink, WHATSAPP_DEFAULT_MESSAGE } from "@/utils/whatsapp";

interface WhatsAppButtonProps {
  label?: string;
  message?: string;
  variant?: "solid" | "gold" | "outline" | "light";
  size?: "sm" | "md" | "lg";
  className?: string;
  showNumber?: boolean;
}

export default function WhatsAppButton({
  label = "Solicitar una consulta",
  message = WHATSAPP_DEFAULT_MESSAGE,
  variant = "gold",
  size = "md",
  className = "",
  showNumber = false,
}: WhatsAppButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2.5 rounded-md font-label font-semibold whitespace-nowrap cursor-pointer transition-colors duration-200";

  const sizes = {
    sm: "px-4 py-2.5 text-sm",
    md: "px-5 py-3 text-sm",
    lg: "px-7 py-4 text-base",
  };

  const variants = {
    solid: "bg-primary-800 text-background-50 hover:bg-primary-900",
    gold: "bg-accent-500 text-primary-950 hover:bg-accent-600",
    outline:
      "border border-accent-500 text-accent-700 hover:bg-accent-500 hover:text-primary-950",
    light:
      "border border-background-50/60 text-background-50 hover:bg-background-50 hover:text-primary-900",
  };

  return (
    <a
      href={buildWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} - abre un chat de WhatsApp`}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      <span className="flex items-center justify-center w-5 h-5">
        <i className="ri-whatsapp-line text-lg" />
      </span>
      <span>{label}</span>
      {showNumber && <span className="font-normal opacity-90">· +57 310 463 3110</span>}
    </a>
  );
}