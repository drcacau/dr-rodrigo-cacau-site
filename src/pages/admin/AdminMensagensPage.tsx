import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { MensagensTable } from '@/components/admin/MensagensTable'
import { mockMensagens } from '@/lib/mock-mensagens'
import type { Contato } from '@/types'

export function AdminMensagensPage() {
  const [mensagens, setMensagens] = useState<Contato[]>(() => mockMensagens.map((m) => ({ ...m })))
  const [selecionada, setSelecionada] = useState<Contato | null>(null)

  function handleSelect(mensagem: Contato) {
    setSelecionada(mensagem)
    if (!mensagem.lido) {
      setMensagens((prev) =>
        prev.map((m) => (m.id === mensagem.id ? { ...m, lido: true } : m)),
      )
    }
  }

  function handleToggleRespondido() {
    if (!selecionada) return
    setMensagens((prev) =>
      prev.map((m) =>
        m.id === selecionada.id ? { ...m, respondido: !m.respondido } : m,
      ),
    )
    setSelecionada((prev) => (prev ? { ...prev, respondido: !prev.respondido } : prev))
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold text-primary">Mensagens Recebidas</h1>
      <p className="mt-1 text-muted-foreground">
        Mensagens enviadas pelo formulário de contato (dados desta sessão — persistência real
        no Módulo 6).
      </p>

      <div className="mt-6 rounded-xl bg-background ring-1 ring-border">
        <MensagensTable mensagens={mensagens} onSelect={handleSelect} />
      </div>

      <Dialog open={!!selecionada} onOpenChange={(open) => !open && setSelecionada(null)}>
        <DialogContent className="sm:max-w-md">
          {selecionada && (
            <>
              <DialogHeader>
                <DialogTitle>{selecionada.nome}</DialogTitle>
                <DialogDescription>
                  {selecionada.email}
                  {selecionada.telefone ? ` · ${selecionada.telefone}` : ''}
                </DialogDescription>
              </DialogHeader>

              <p className="text-sm text-foreground">{selecionada.mensagem}</p>

              <p className="text-xs text-muted-foreground">
                Recebida em {new Date(selecionada.created_at).toLocaleString('pt-BR')}
              </p>

              <Button variant="outline" onClick={handleToggleRespondido}>
                {selecionada.respondido ? 'Marcar como não respondida' : 'Marcar como respondida'}
              </Button>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
