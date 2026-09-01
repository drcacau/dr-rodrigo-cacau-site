import { Link } from 'react-router-dom'
import {
  Activity,
  CalendarClock,
  Gauge,
  HeartPulse,
  Moon,
  Scale,
  Watch,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const exames = [
  {
    icon: Activity,
    title: 'Teste Ergométrico',
    description: 'Avaliação da resposta cardíaca ao esforço físico.',
  },
  {
    icon: HeartPulse,
    title: 'Eletrocardiograma (ECG)',
    description: 'Registro da atividade elétrica do coração.',
  },
  {
    icon: Gauge,
    title: 'MAPA',
    description: 'Monitorização ambulatorial da pressão arterial por 24 horas.',
  },
  {
    icon: CalendarClock,
    title: 'MRPA',
    description: 'Monitorização residencial da pressão arterial ao longo de dias.',
  },
  {
    icon: Watch,
    title: 'Holter',
    description: 'Monitorização contínua do ritmo cardíaco por 24 horas.',
  },
  {
    icon: Moon,
    title: 'Polissonografia',
    description: 'Avaliação do sono para diagnóstico de distúrbios como a apneia.',
  },
  {
    icon: Scale,
    title: 'Bioimpedância',
    description: 'Análise da composição corporal (gordura, massa magra e água).',
  },
]

export function ExamesSection() {
  return (
    <section id="exames" className="scroll-mt-20 border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-center text-3xl font-semibold text-primary">Exames que Realizamos</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
          Estrutura completa para diagnóstico e acompanhamento cardiometabólico, sem sair do
          consultório. Clique num exame para agendar.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {exames.map(({ icon: Icon, title, description }) => (
            <Link key={title} to={`/contato?exame=${encodeURIComponent(title)}`}>
              <Card className="h-full transition-shadow hover:shadow-md">
                <CardHeader>
                  <Icon className="size-8 text-accent" strokeWidth={1.5} />
                  <CardTitle className="mt-3 text-lg">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
