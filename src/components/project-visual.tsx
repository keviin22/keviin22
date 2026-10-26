import { ArrowUpRight, Search, SlidersHorizontal } from "lucide-react";
export function Car({ color = "#aeb6b2" }: { color?: string }) {
  return (
    <svg viewBox="0 0 600 240" fill="none" aria-hidden="true">
      <ellipse cx="306" cy="203" rx="249" ry="13" fill="#000" opacity=".08" />
      <path
        d="M62 142 113 126 175 70Q189 57 220 57H358Q386 58 407 80L453 125 515 141Q537 149 544 174L539 190H57L49 174Z"
        fill={color}
        stroke="#555e59"
        strokeWidth="2"
      />
      <path
        d="m144 124 48-48q7-6 23-6h48v54Zm133-54h76q18 0 32 16l34 38H277Z"
        fill="#303c38"
      />
      <path d="m193 77 57 0-77 44h-22Z" fill="#82928b" opacity=".35" />
      <path d="M66 153h48l-9 13H56m429-16 44 7 7 14h-43" fill="#e8ede9" />
      <path
        d="M130 135h329M268 133v50M426 135l10 48M70 181h455"
        stroke="#5f6c65"
        strokeWidth="2"
      />
      <path d="M292 143h24m-110 0h24" stroke="#35443b" strokeWidth="4" />
      <circle cx="149" cy="184" r="39" fill="#232625" />
      <circle cx="149" cy="184" r="24" fill="#bfc3c0" />
      <circle cx="149" cy="184" r="16" stroke="#626d66" strokeWidth="9" />
      <circle cx="453" cy="184" r="39" fill="#232625" />
      <circle cx="453" cy="184" r="24" fill="#bfc3c0" />
      <circle cx="453" cy="184" r="16" stroke="#626d66" strokeWidth="9" />
    </svg>
  );
}
export function ProjectVisual({ detail = false }: { detail?: boolean }) {
  return (
    <div
      className={`project-visual ${detail ? "detail-visual" : ""}`}
      role="img"
      aria-label="Mockup ilustrativo: catálogo de veículos da plataforma Auto, com um sedã em destaque. Interface conceitual, não funcional."
    >
      <div className="visual-caption">
        <span>AUTO — DIGITAL SHOWROOM</span>
        <span>ESTUDO DE INTERFACE / 01</span>
      </div>
      <div className="browser-mockup" aria-hidden="true">
        <div className="browser-bar">
          <i />
          <i />
          <i />
          <span>auto / catálogo digital</span>
        </div>
        <div className="auto-nav">
          <b>
            auto<span>.</span>
          </b>
          <div>
            Encontre seu carro <span>Sobre nós</span>
          </div>
          <span className="mock-contact">
            Fale com a revenda <ArrowUpRight size={10} />
          </span>
        </div>
        <div className="auto-hero">
          <div>
            <span className="mock-eyebrow">SEU PRÓXIMO CAPÍTULO</span>
            <h3>
              Novos caminhos.
              <br />
              Novas histórias.
            </h3>
            <p>Encontre o carro que acompanha você.</p>
            <span className="mock-button">
              Explorar veículos <ArrowUpRight size={11} />
            </span>
          </div>
          <div className="car-stage">
            <span>MOVE FORWARD.</span>
            <Car />
          </div>
        </div>
        <div className="mock-search">
          <span>
            <Search size={12} /> Qual será o seu próximo carro?
          </span>
          <span>
            <SlidersHorizontal size={12} /> Filtros
          </span>
        </div>
        <div className="mock-cars">
          {["#bdc2bf", "#8c9c91", "#dedbd0"].map((color, i) => (
            <div key={color}>
              <Car color={color} />
              <span>
                {
                  [
                    "Sedã · Conforto em cada detalhe",
                    "SUV · Pronto para novos caminhos",
                    "Hatch · A cidade no seu ritmo",
                  ][i]
                }
              </span>
            </div>
          ))}
        </div>
      </div>
      <span className="visual-footnote">
        Mockup ilustrativo · Conteúdo provisório
      </span>
    </div>
  );
}
