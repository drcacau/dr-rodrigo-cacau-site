import { Link } from 'react-router-dom'
import { buttonVariants } from '@/components/ui/button'

export function CTABanner() {
  return (
    <section className="bg-primary">
      <div className="mx-auto max-w-6xl px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold text-primary-foreground">
          Pronto para cuidar do seu coração?
        </h2>
        <p className="mt-3 text-primary-foreground/80">
          Agende sua consulta e dê o primeiro passo para uma saúde cardiovascular plena.
        </p>
        <div className="mt-8">
          <Link
            to="/contato"
            className={buttonVariants({ variant: 'secondary', size: 'lg', className: 'px-6' })}
          >
            Fale Conosco
          </Link>
        </div>
      </div>
    </section>
  )
}
