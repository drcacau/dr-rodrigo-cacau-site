import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 text-center">
      <h1 className="text-4xl font-semibold text-primary">Página não encontrada</h1>
      <p className="mt-2 text-muted-foreground">
        <Link to="/" className="text-primary underline">
          Voltar para a página inicial
        </Link>
      </p>
    </div>
  )
}
