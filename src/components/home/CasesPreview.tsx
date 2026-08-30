import { Link } from 'react-router-dom'
import { Quote } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useCases } from '@/hooks/useCases'

export function CasesPreview() {
  const { data: cases, isLoading } = useCases()
  const destaques = (cases ?? []).filter((c) => c.destaque).slice(0, 3)

  if (!isLoading && destaques.length === 0) return null

  return (
    <section className="bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-center text-3xl font-semibold text-primary">Cases de Sucesso</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {destaques.map((caso) => (
            <Card key={caso.id}>
              <CardContent>
                <Quote className="size-6 text-accent" />
                <p className="mt-4 text-sm text-foreground">“{caso.depoimento}”</p>
                <p className="mt-4 text-sm font-medium text-primary">{caso.paciente}</p>
                <p className="text-xs text-muted-foreground">{caso.condicao}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/cases" className={buttonVariants({ variant: 'outline', size: 'lg' })}>
            Ver todos os cases
          </Link>
        </div>
      </div>
    </section>
  )
}
