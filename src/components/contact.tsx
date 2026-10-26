import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { site } from "@/lib/site";
export function Contact() {
  return (
    <section id="contato" className="contact section">
      <div className="container">
        <div className="eyebrow">
          <span className="dot" /> VAMOS CONVERSAR
        </div>
        <div className="contact-grid">
          <h2>
            O próximo projeto
            <br />
            pode ser o seu<span className="muted">.</span>
          </h2>
          <div>
            <p>
              Uma ideia no papel ou um desafio no negócio.
              <br />
              Vamos entender o que você precisa construir.
            </p>
            <div className="contact-actions">
              {site.whatsapp ? (
                <a
                  className="button button-dark"
                  href={`https://wa.me/${site.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={17} /> Conversar pelo WhatsApp{" "}
                  <ArrowUpRight size={17} />
                </a>
              ) : (
                <span className="contact-pending">
                  <MessageCircle size={18} /> WhatsApp em breve
                </span>
              )}
              {site.email ? (
                <a className="email-link" href={`mailto:${site.email}`}>
                  <Mail size={17} />
                  {site.email}
                  <ArrowUpRight size={16} />
                </a>
              ) : (
                <span className="contact-pending">
                  <Mail size={18} /> E-mail comercial em definição
                </span>
              )}
            </div>
            {!site.email && !site.whatsapp && (
              <p className="placeholder-note">
                Versão de apresentação. Os canais de contato serão adicionados
                antes do lançamento.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
