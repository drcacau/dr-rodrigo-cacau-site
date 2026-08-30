import { useMemo, useState } from 'react'
import { Plus } from 'lucide-react'
import { toast } from 'sonner'
import { CaseForm, type CaseFormValues } from '@/components/admin/CaseForm'
import { CasesTable } from '@/components/admin/CasesTable'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { useAllCases, useCreateCase, useUpdateCase } from '@/hooks/useCases'
import type { Case } from '@/types'

export function AdminCasesPage() {
  const { data: cases, isLoading, isError } = useAllCases()
  const createCase = useCreateCase()
  const updateCase = useUpdateCase()

  const [busca, setBusca] = useState('')
  const [dialogAberto, setDialogAberto] = useState(false)
  const [caseEmEdicao, setCaseEmEdicao] = useState<Case | null>(null)

  const casesFiltrados = useMemo(() => {
    const termo = busca.trim().toLowerCase()
    const todos = cases ?? []
    if (!termo) return todos
    return todos.filter(
      (c) =>
        c.paciente?.toLowerCase().includes(termo) ||
        c.condicao?.toLowerCase().includes(termo),
    )
  }, [cases, busca])

  function handleNovo() {
    setCaseEmEdicao(null)
    setDialogAberto(true)
  }

  function handleEditar(caso: Case) {
    setCaseEmEdicao(caso)
    setDialogAberto(true)
  }

  async function handleToggleAtivo(caso: Case) {
    try {
      await updateCase.mutateAsync({ id: caso.id, ativo: !caso.ativo })
      toast.success(caso.ativo ? 'Case desativado.' : 'Case reativado.')
    } catch {
      toast.error('Não foi possível atualizar o case.')
    }
  }

  async function handleSubmit(values: CaseFormValues) {
    try {
      if (caseEmEdicao) {
        await updateCase.mutateAsync({
          id: caseEmEdicao.id,
          ...values,
          video_url: values.video_url || null,
        })
        toast.success('Case atualizado.')
      } else {
        await createCase.mutateAsync({
          ...values,
          video_url: values.video_url || null,
          ordem: (cases?.length ?? 0) + 1,
        })
        toast.success('Case criado.')
      }
      setDialogAberto(false)
    } catch {
      toast.error('Não foi possível salvar o case.')
    }
  }

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-primary">Gerenciar Cases</h1>
          <p className="mt-1 text-muted-foreground">Cases de sucesso exibidos no site.</p>
        </div>
        <Button onClick={handleNovo} className="gap-2">
          <Plus className="size-4" />
          Novo case
        </Button>
      </div>

      <Input
        placeholder="Buscar por paciente ou condição..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        className="mt-6 max-w-sm"
      />

      {isError && (
        <p className="mt-4 text-destructive">Não foi possível carregar os cases.</p>
      )}

      {!isError && (
        <div className="mt-4 rounded-xl bg-background ring-1 ring-border">
          {isLoading ? (
            <p className="p-6 text-muted-foreground">Carregando...</p>
          ) : (
            <CasesTable
              cases={casesFiltrados}
              onEdit={handleEditar}
              onToggleAtivo={handleToggleAtivo}
            />
          )}
        </div>
      )}

      <Dialog open={dialogAberto} onOpenChange={setDialogAberto}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{caseEmEdicao ? 'Editar case' : 'Novo case'}</DialogTitle>
          </DialogHeader>
          <CaseForm
            caso={caseEmEdicao}
            onSubmit={handleSubmit}
            onCancel={() => setDialogAberto(false)}
          />
        </DialogContent>
      </Dialog>
    </div>
  )
}
