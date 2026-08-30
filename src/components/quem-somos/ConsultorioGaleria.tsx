import { Building2 } from 'lucide-react'

const fotos = [
  { legenda: 'Recepção', src: '/images/consultorio-recepcao.webp' },
  { legenda: 'Sala de consulta', src: '/images/consultorio-sala-consulta.jpg' },
  { legenda: 'Sala de exames', src: null },
  { legenda: 'Espaço de espera', src: null },
]

export function ConsultorioGaleria() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-center text-3xl font-semibold text-primary">O Consultório</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
          Um espaço pensado para o conforto e acolhimento de cada paciente, em Feira de
          Santana - BA.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {fotos.map(({ legenda, src }) => (
            <figure key={legenda} className="overflow-hidden rounded-xl bg-secondary">
              <div className="flex aspect-square items-center justify-center">
                {src ? (
                  <img src={src} alt={legenda} className="size-full object-cover" />
                ) : (
                  <Building2 className="size-10 text-primary/40" strokeWidth={1.25} />
                )}
              </div>
              <figcaption className="px-4 py-3 text-sm text-muted-foreground">
                {legenda}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
