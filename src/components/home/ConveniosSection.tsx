import { ShieldCheck } from 'lucide-react'

const convenios = ['Unimed Nacional', 'Unimed Essencial']

export function ConveniosSection() {
  return (
    <section className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold text-primary">Convênios Atendidos</h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Atendemos pelos seguintes planos de saúde:
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {convenios.map((nome) => (
            <div
              key={nome}
              className="flex items-center gap-2 rounded-full bg-background px-5 py-3 ring-1 ring-border"
            >
              <ShieldCheck className="size-5 text-accent" strokeWidth={1.5} />
              <span className="font-medium text-primary">{nome}</span>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-xl text-sm text-muted-foreground">
          Atende outro convênio? Oferecemos condições especiais para pacientes de outros
          planos de saúde — fale com a gente.
        </p>
      </div>
    </section>
  )
}
