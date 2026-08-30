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
import { mockCases } from '@/lib/mock-cases'
import type { Case } from '@/types'

export function AdminCasesPage() {
  const [cases, setCases] = useState<Case[]>(() => mockCases.map((c) => ({ ...c })))
  const [busca, setBusca] = useState('')
  const [dialogAberto, setDialogAberto] = useState(false)
  const [caseEmEdicao, setCaseEmEdicao] = useState<Case | null>(null)

  const casesFiltrados = useMemo(() => {
    const termo = busca.trim().toLowerCase()
    if (!termo) return cases
    return cases.filter(
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

  function handleToggleAtivo(caso: Case) {
    setCases((prev) =>
      prev.map((c) => (c.id === caso.id ? { ...c, ativo: !c.ativo } : c)),
    )
    toast.success(caso.ativo ? 'Case desativado.' : 'Case reativado.')
  }

  function handleSubmit(values: CaseFormValues) {
    if (caseEmEdicao) {
      setCases((prev) =>
        prev.map((c) => (c.id === caseEmEdicao.id ? { ...c, ...values } : c)),
      )
      toast.success('Case atualizado.')
    } else {
      const novoCase: Case = {
        id: crypto.randomUUID(),
        ...values,
        video_url: values.video_url || null,
        foto_url: null,
        ordem: cases.length + 1,
        created_at: new Date().toISOString(),
      }
      setCases((prev) => [novoCase, ...prev])
      toast.success('Case criado.')
    }
    setDialogAberto(false)
  }

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-primary">Gerenciar Cases</h1>
          <p className="mt-1 text-muted-foreground">
            Cases de sucesso exibidos no site (dados desta sessão — persistência real no
            Módulo 6).
          </p>
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

      <div className="mt-4 rounded-xl bg-background ring-1 ring-border">
        <CasesTable cases={casesFiltrados} onEdit={handleEditar} onToggleAtivo={handleToggleAtivo} />
      </div>

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
