import { Link } from 'react-router-dom'
import { CalendarCheck, ClipboardList, Stethoscope } from 'lucide-react'

const etapas = [
  {
    icon: Stethoscope,
    title: 'Consulta',
    description: 'Avaliação clínica completa, ouvindo histórico, sintomas e hábitos de vida.',
    to: '/contato',
  },
  {
    icon: ClipboardList,
    title: 'Exames',
    description: 'Investigação cardiometabólica direcionada às necessidades de cada paciente.',
    to: '/#exames',
  },
  {
    icon: CalendarCheck,
    title: 'Acompanhamento',
    description: 'Plano de cuidado contínuo, com ajustes conforme a evolução do paciente.',
    to: '/contato',
  },
]

export function AbordagemSection() {
  return (
    <section className="bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-primary">Nossa Abordagem</h2>
          <p className="mt-4 text-muted-foreground">
            A medicina integrada aplicada à cardiologia olha para além do exame: considera
            alimentação, sono, estresse e estilo de vida como parte do tratamento do coração.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {etapas.map(({ icon: Icon, title, description, to }, i) => (
            <Link
              key={title}
              to={to}
              className="rounded-xl bg-background p-6 ring-1 ring-border transition-shadow hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-8 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                  {i + 1}
                </span>
                <Icon className="size-6 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="mt-4 text-lg font-medium text-primary">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
