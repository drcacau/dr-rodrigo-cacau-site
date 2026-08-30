import { Link } from 'react-router-dom'
import { Quote } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const depoimentos = [
  {
    paciente: 'M.S., 58 anos',
    condicao: 'Hipertensão arterial',
    depoimento:
      'Com o acompanhamento do Dr. Rodrigo, consegui controlar minha pressão sem abrir mão da minha rotina.',
  },
  {
    paciente: 'J.A., 47 anos',
    condicao: 'Check-up cardiometabólico',
    depoimento:
      'O olhar integrativo fez toda diferença. Não só tratei o coração, mudei meus hábitos de vida.',
  },
  {
    paciente: 'R.P., 63 anos',
    condicao: 'Pós-operatório cardíaco',
    depoimento: 'Atendimento humano, atencioso e extremamente competente. Recomendo de olhos fechados.',
  },
]

export function CasesPreview() {
  return (
    <section className="bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-center text-3xl font-semibold text-primary">Cases de Sucesso</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {depoimentos.map((caso) => (
            <Card key={caso.paciente}>
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
