import { HeartHandshake, HeartPulse, Leaf, Stethoscope } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const diferenciais = [
  {
    icon: Stethoscope,
    title: 'Cardiologia Clínica',
    description: 'Diagnóstico e acompanhamento cardiológico completo, do check-up ao tratamento.',
  },
  {
    icon: HeartPulse,
    title: 'Check-up Cardiometabólico',
    description: 'Avaliação aprofundada dos fatores de risco cardiovascular e metabólico.',
  },
  {
    icon: Leaf,
    title: 'Medicina Integrada',
    description: 'Abordagem que une ciência médica e cuidado com o estilo de vida do paciente.',
  },
  {
    icon: HeartHandshake,
    title: 'Atendimento Humanizado',
    description: 'Escuta atenta e acolhimento em cada etapa do cuidado com sua saúde.',
  },
]

export function DiferenciaisGrid() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-center text-3xl font-semibold text-primary">Nossos Diferenciais</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {diferenciais.map(({ icon: Icon, title, description }) => (
            <Card key={title}>
              <CardHeader>
                <Icon className="size-8 text-accent" strokeWidth={1.5} />
                <CardTitle className="mt-3 text-lg">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
