import { useState } from 'react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { MensagensTable } from '@/components/admin/MensagensTable'
import { useContatos, useUpdateContato } from '@/hooks/useContatos'
import type { Contato } from '@/types'

export function AdminMensagensPage() {
  const { data: mensagens, isLoading, isError } = useContatos()
  const updateContato = useUpdateContato()
  const [selecionadaId, setSelecionadaId] = useState<string | null>(null)

  const selecionada = mensagens?.find((m) => m.id === selecionadaId) ?? null

  function handleSelect(mensagem: Contato) {
    setSelecionadaId(mensagem.id)
    if (!mensagem.lido) {
      updateContato.mutate({ id: mensagem.id, lido: true })
    }
  }

  function handleToggleRespondido() {
    if (!selecionada) return
    updateContato.mutate(
      { id: selecionada.id, respondido: !selecionada.respondido },
      { onError: () => toast.error('Não foi possível atualizar a mensagem.') },
    )
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold text-primary">Mensagens Recebidas</h1>
      <p className="mt-1 text-muted-foreground">Mensagens enviadas pelo formulário de contato.</p>

      {isError && (
        <p className="mt-4 text-destructive">Não foi possível carregar as mensagens.</p>
      )}

      {!isError && (
        <div className="mt-6 rounded-xl bg-background ring-1 ring-border">
          {isLoading ? (
            <p className="p-6 text-muted-foreground">Carregando...</p>
          ) : (
            <MensagensTable mensagens={mensagens ?? []} onSelect={handleSelect} />
          )}
        </div>
      )}

      <Dialog open={!!selecionada} onOpenChange={(open) => !open && setSelecionadaId(null)}>
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
