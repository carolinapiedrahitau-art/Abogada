import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";

const SUBMIT_ADDR = "https://readdy.ai/api/form/db6nv7fqhq9pk5mecve0";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [formError, setFormError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const honeypot = String(formData.get("website_alt") || "").trim();
    if (honeypot) {
      setStatus("success");
      form.reset();
      return;
    }

    if (!formData.get("consent")) {
      setStatus("error");
      setFormError(
        "Para enviar el mensaje debe autorizar el tratamiento de sus datos."
      );
      return;
    }

    setStatus("submitting");
    setFormError("");

    const params = new URLSearchParams();
    formData.forEach((value, key) => {
      if (key === "website_alt") return;
      const text = String(value).trim();
      if (text) params.append(key, text);
    });

    try {
      const response = await fetch(SUBMIT_ADDR, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });

      const responseText = await response.text();
      let parsed: {
        code?: string;
        message?: string;
        meta?: { message?: string; detail?: string };
      } | null = null;
      try {
        parsed = JSON.parse(responseText);
      } catch {
        parsed = null;
      }

      const serverMsg =
        parsed?.meta?.message ||
        parsed?.message ||
        parsed?.meta?.detail ||
        responseText ||
        "";

      const isSpam = serverMsg.toLowerCase().includes("spam");
      const ok = response.ok && parsed?.code === "OK" && !isSpam;

      if (ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setFormError(serverMsg || "No pudimos enviar su mensaje. Intente de nuevo.");
      }
    } catch {
      setStatus("error");
      setFormError(
        "Ocurrió un problema de conexión. Revise su red e inténtelo otra vez."
      );
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-lg border border-primary-200 bg-primary-50 p-8 text-center">
        <span className="mx-auto flex items-center justify-center w-14 h-14 rounded-full bg-primary-800 text-background-50">
          <i className="ri-check-line text-3xl" />
        </span>
        <h3 className="mt-5 font-heading text-2xl font-semibold text-foreground-900">
          ¡Mensaje enviado!
        </h3>
        <p className="mt-3 font-body text-sm leading-relaxed text-foreground-600 max-w-md mx-auto">
          Gracias por escribir. Su solicitud será revisada y recibirá respuesta
          pronto. Si lo prefiere, también puede escribir directamente por WhatsApp.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 font-label text-sm font-semibold text-accent-700 hover:text-accent-800 transition-colors duration-200 cursor-pointer"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-md border border-background-300 bg-background-50 px-4 py-3 font-body text-sm text-foreground-900 placeholder:text-foreground-400 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-accent-400 transition-colors duration-200";
  const labelClass =
    "font-label text-xs font-semibold uppercase tracking-wider text-foreground-600 mb-2 block";

  return (
    <form
      data-readdy-form
      id="contacto-form"
      onSubmit={handleSubmit}
      className="rounded-lg border border-background-200 bg-background-50 p-6 md:p-8"
      noValidate
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="nombre" className={labelClass}>
            Nombre
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            required
            placeholder="Su nombre"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="contacto_preferido" className={labelClass}>
            Medio de contacto preferido
          </label>
          <select
            id="contacto_preferido"
            name="contacto_preferido"
            className={`${inputClass} appearance-none cursor-pointer`}
            defaultValue=""
          >
            <option value="" disabled>
              Seleccione una opción
            </option>
            <option value="WhatsApp">WhatsApp</option>
            <option value="Llamada telefónica">Llamada telefónica</option>
            <option value="Correo electrónico">Correo electrónico</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="dato_contacto" className={labelClass}>
            Teléfono o correo para responderle
          </label>
          <input
            id="dato_contacto"
            name="dato_contacto"
            type="text"
            placeholder="Ej: 300 000 0000"
            className={inputClass}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="motivo" className={labelClass}>
            Motivo general de la consulta
          </label>
          <textarea
            id="motivo"
            name="motivo"
            rows={5}
            maxLength={500}
            required
            placeholder="Describa de forma general su consulta, sin incluir datos sensibles..."
            className={`${inputClass} resize-none`}
          />
          <p className="mt-2 font-body text-xs text-foreground-400">Máximo 500 caracteres.</p>
        </div>
      </div>

      {/* Anti-spam guard */}
      <input
        type="text"
        name="website_alt"
        className="form-guard-field"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        readOnly
      />

      <div className="mt-5 rounded-md bg-background-100 border border-background-200 p-4">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="consent"
            value="autorizo"
            className="mt-1 w-4 h-4 cursor-pointer accent-primary-800"
          />
          <span className="font-body text-xs leading-relaxed text-foreground-600">
            Autorizo el tratamiento de mis datos personales para atender esta
            solicitud, conforme a la{" "}
            <Link
              to="/legal#tratamiento-datos"
              className="text-accent-700 hover:text-accent-800 underline cursor-pointer"
            >
              Política de Tratamiento de Datos Personales
            </Link>
            .
          </span>
        </label>
      </div>

      <p className="mt-3 font-body text-xs leading-relaxed text-foreground-500">
        Por seguridad, no envíe contraseñas, datos bancarios, documentos de
        identidad completos ni información confidencial del proceso por este
        formulario público.
      </p>

      {status === "error" && (
        <div className="mt-5 flex items-start gap-3 rounded-md border border-accent-300 bg-accent-50 px-4 py-3">
          <span className="flex items-center justify-center w-5 h-5 shrink-0 mt-0.5">
            <i className="ri-error-warning-line text-accent-700" />
          </span>
          <p className="font-body text-sm text-foreground-800">{formError}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-md bg-primary-800 px-7 py-3.5 font-label font-semibold text-background-50 hover:bg-primary-900 disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-200 whitespace-nowrap cursor-pointer"
      >
        {status === "submitting" ? (
          <>
            <i className="ri-loader-4-line animate-spin text-lg" />
            Enviando...
          </>
        ) : (
          <>
            <i className="ri-send-plane-line text-lg" />
            Enviar mensaje
          </>
        )}
      </button>
    </form>
  );
}