import { Link } from 'react-router-dom'
import { buttonVariants } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <h1 className="text-4xl leading-tight font-semibold text-primary lg:text-5xl">
            Cuide do seu coração com quem une ciência e cuidado humano
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Cardiologia clínica e medicina integrada em Feira de Santana - BA, com um
            olhar para o paciente como um todo.
          </p>
          <div className="mt-8">
            <Link to="/contato" className={buttonVariants({ size: 'lg', className: 'px-6' })}>
              Agendar consulta
            </Link>
          </div>
        </div>

        <div className="aspect-square overflow-hidden rounded-2xl bg-secondary lg:aspect-4/5">
          <img
            src="/images/dr-rodrigo-perfil.jpg"
            alt="Dr. Rodrigo Cacau"
            className="size-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
