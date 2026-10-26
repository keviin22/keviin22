import Link from "next/link";
export default function NotFound() {
  return (
    <main id="conteudo" className="container error-page">
      <div className="eyebrow">404 / PÁGINA NÃO ENCONTRADA</div>
      <h1>
        Um caminho
        <br />a redesenhar.
      </h1>
      <p>Esta página não existe ou foi movida.</p>
      <Link href="/" className="button button-dark">
        Voltar para o início
      </Link>
    </main>
  );
}
