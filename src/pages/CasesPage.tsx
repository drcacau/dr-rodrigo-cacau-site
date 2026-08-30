import { Helmet } from 'react-helmet-async'
import { CasesGrid } from '@/components/cases/CasesGrid'

export function CasesPage() {
  return (
    <>
      <Helmet>
        <title>Cases de Sucesso — Dr. Rodrigo Cacau</title>
        <meta
          name="description"
          content="Depoimentos de pacientes que transformaram sua saúde cardiovascular com medicina integrada."
        />
      </Helmet>

      <div className="border-b border-border bg-background">
        <div className="mx-auto max-w-6xl px-6 pt-16 pb-4 text-center">
          <h1 className="text-4xl font-semibold text-primary">Cases de Sucesso</h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Histórias reais de pacientes que cuidaram do coração com um olhar integrativo.
          </p>
        </div>
      </div>

      <CasesGrid />
    </>
  )
}
