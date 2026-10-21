export const WHATSAPP_NUMBER = "573104633110";

export const WHATSAPP_DISPLAY = "+57 310 463 3110";

export const WHATSAPP_DEFAULT_MESSAGE =
  "Hola, doctora Carolina. Me gustaría recibir información sobre sus servicios jurídicos y la posibilidad de agendar una consulta.";

/**
 * Builds an official wa.me link that opens a WhatsApp chat with the lawyer's
 * number and a correctly URL-encoded pre-filled message.
 */
export function buildWhatsAppLink(message: string = WHATSAPP_DEFAULT_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Builds a pre-filled message that references only the selected service,
 * without automatically including sensitive personal information.
 */
export function buildServiceMessage(serviceName: string): string {
  return `Hola, doctora Carolina. Me gustaría consultar sobre el servicio de ${serviceName}.`;
}