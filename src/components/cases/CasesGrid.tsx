import { useMemo, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { mockCases } from '@/lib/mock-cases'
import { CaseCard } from './CaseCard'
import { CaseCardVideo } from './CaseCardVideo'
import { CasesFilter, type CasesFilterValue } from './CasesFilter'

const PAGE_SIZE = 6

export function CasesGrid() {
  const [filtro, setFiltro] = useState<CasesFilterValue>('todos')
  const [pagina, setPagina] = useState(1)

  const casosFiltrados = useMemo(() => {
    const ativos = mockCases.filter((caso) => caso.ativo)
    if (filtro === 'todos') return ativos
    return ativos.filter((caso) => caso.tipo === filtro)
  }, [filtro])

  const totalPaginas = Math.max(1, Math.ceil(casosFiltrados.length / PAGE_SIZE))
  const paginaAtual = Math.min(pagina, totalPaginas)
  const casosPagina = casosFiltrados.slice(
    (paginaAtual - 1) * PAGE_SIZE,
    paginaAtual * PAGE_SIZE,
  )

  function handleFiltroChange(value: CasesFilterValue) {
    setFiltro(value)
    setPagina(1)
  }

  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <CasesFilter value={filtro} onChange={handleFiltroChange} />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {casosPagina.map((caso) =>
            caso.tipo === 'video' ? (
              <CaseCardVideo key={caso.id} caso={caso} />
            ) : (
              <CaseCard key={caso.id} caso={caso} />
            ),
          )}
        </div>

        {casosPagina.length === 0 && (
          <p className="mt-10 text-center text-muted-foreground">
            Nenhum case encontrado para este filtro.
          </p>
        )}

        {totalPaginas > 1 && (
          <div className="mt-12 flex items-center justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              disabled={paginaAtual === 1}
              onClick={() => setPagina((p) => p - 1)}
              aria-label="Página anterior"
            >
              <ChevronLeft className="size-4" />
            </Button>
            <span className="text-sm text-muted-foreground">
              Página {paginaAtual} de {totalPaginas}
            </span>
            <Button
              variant="outline"
              size="icon"
              disabled={paginaAtual === totalPaginas}
              onClick={() => setPagina((p) => p + 1)}
              aria-label="Próxima página"
            >
              <ChevronRight className="size-4" />
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
