import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { navigation, site } from "@/lib/site";
export function Footer() {
  return (
    <footer className="container footer">
      <div className="footer-top">
        <div>
          <Link href="/#inicio" className="wordmark">
            {site.name}
            <span>.</span>
          </Link>
          <p>Ideias bem desenvolvidas.</p>
          {site.email && (
            <p>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          )}
          {site.whatsapp && (
            <p>
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp ↗
              </a>
            </p>
          )}
        </div>
        <nav aria-label="Navegação do rodapé">
          {navigation.slice(1).map((item) => (
            <Link href={item.href} key={item.label}>
              {item.label}
            </Link>
          ))}
        </nav>
        <a href="/#inicio" className="back-top">
          Voltar ao topo <ArrowUpRight size={16} />
        </a>
      </div>
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} {site.name}. Todos os direitos
          reservados.
        </span>
        <span>
          {site.provisionalBrand
            ? "forma — nome e identidade provisórios"
            : "Estúdio independente de desenvolvimento"}
        </span>
      </div>
    </footer>
  );
}
