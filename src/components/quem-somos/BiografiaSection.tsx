import { UserRound } from 'lucide-react'

export function BiografiaSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
        <div className="flex aspect-4/5 items-center justify-center rounded-2xl bg-secondary lg:order-1">
          <UserRound className="size-24 text-primary/40" strokeWidth={1.25} />
        </div>

        <div>
          <h1 className="text-4xl font-semibold text-primary">Dr. Rodrigo Cacau</h1>
          <p className="mt-1 text-sm font-medium text-accent">CRM-BA 19577 · Cardiologia</p>

          <p className="mt-6 text-muted-foreground">
            Médico cardiologista formado com especialização em Cardiologia Clínica, com
            aprofundamento em Medicina Integrativa aplicada à saúde cardiovascular. Atua em
            Feira de Santana e região metropolitana, unindo o rigor da ciência médica a uma
            escuta atenta de cada paciente.
          </p>

          <blockquote className="mt-6 border-l-2 border-accent pl-4 font-heading text-lg text-primary">
            "Tratar o paciente como um todo — não apenas o coração, mas a pessoa por trás dele."
          </blockquote>
        </div>
      </div>
    </section>
  )
}
