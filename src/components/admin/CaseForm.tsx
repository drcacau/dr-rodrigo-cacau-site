import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { Textarea } from '@/components/ui/textarea'
import { useUploadCaseFoto } from '@/hooks/useCases'
import type { Case } from '@/types'

const caseSchema = z.object({
  paciente: z.string().trim().min(2, 'Informe as iniciais e idade do paciente.'),
  condicao: z.string().trim().min(2, 'Informe a condição tratada.'),
  tipo: z.enum(['texto', 'video']),
  depoimento: z.string().trim().min(10, 'O depoimento deve ter ao menos 10 caracteres.'),
  video_url: z.string().trim().optional(),
  destaque: z.boolean(),
  ativo: z.boolean(),
})

export type CaseFormValues = z.infer<typeof caseSchema> & { foto_url: string | null }

interface CaseFormProps {
  caso?: Case | null
  onSubmit: (values: CaseFormValues) => void
  onCancel: () => void
}

export function CaseForm({ caso, onSubmit, onCancel }: CaseFormProps) {
  const [fotoFile, setFotoFile] = useState<File | null>(null)
  const fotoUrl = caso?.foto_url ?? null
  const uploadFoto = useUploadCaseFoto()

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof caseSchema>>({
    resolver: zodResolver(caseSchema),
    defaultValues: {
      paciente: caso?.paciente ?? '',
      condicao: caso?.condicao ?? '',
      tipo: caso?.tipo ?? 'texto',
      depoimento: caso?.depoimento ?? '',
      video_url: caso?.video_url ?? '',
      destaque: caso?.destaque ?? false,
      ativo: caso?.ativo ?? true,
    },
  })

  const tipo = watch('tipo')

  async function onValid(values: z.infer<typeof caseSchema>) {
    let finalFotoUrl = fotoUrl
    if (fotoFile) {
      try {
        finalFotoUrl = await uploadFoto.mutateAsync(fotoFile)
      } catch {
        toast.error('Falha ao enviar a foto. O case será salvo sem a foto.')
      }
    }
    onSubmit({ ...values, foto_url: finalFotoUrl })
  }

  return (
    <form onSubmit={handleSubmit(onValid)} className="space-y-4" noValidate>
      <div className="space-y-1.5">
        <Label htmlFor="paciente">Paciente</Label>
        <Input id="paciente" placeholder="Ex: M.S., 58 anos" {...register('paciente')} />
        {errors.paciente && (
          <p className="text-sm text-destructive">{errors.paciente.message}</p>
        )}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="condicao">Condição tratada</Label>
        <Input id="condicao" {...register('condicao')} />
        {errors.condicao && (
          <p className="text-sm text-destructive">{errors.condicao.message}</p>
        )}
      </div>

      <div className="space-y-1.5">
        <Label>Tipo</Label>
        <Controller
          control={control}
          name="tipo"
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="texto">Texto</SelectItem>
                <SelectItem value="video">Vídeo</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
      </div>

      {tipo === 'video' && (
        <div className="space-y-1.5">
          <Label htmlFor="video_url">URL do vídeo (YouTube/Vimeo)</Label>
          <Input id="video_url" placeholder="https://..." {...register('video_url')} />
        </div>
      )}

      <div className="space-y-1.5">
        <Label htmlFor="depoimento">Depoimento</Label>
        <Textarea id="depoimento" rows={4} {...register('depoimento')} />
        {errors.depoimento && (
          <p className="text-sm text-destructive">{errors.depoimento.message}</p>
        )}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="foto">Foto do paciente</Label>
        {fotoUrl && !fotoFile && (
          <img src={fotoUrl} alt="" className="mb-2 h-20 w-20 rounded-lg object-cover" />
        )}
        <Input
          id="foto"
          type="file"
          accept="image/*"
          onChange={(e) => setFotoFile(e.target.files?.[0] ?? null)}
        />
      </div>

      <div className="flex items-center justify-between">
        <Label htmlFor="destaque">Destaque na Home</Label>
        <Controller
          control={control}
          name="destaque"
          render={({ field }) => (
            <Switch id="destaque" checked={field.value} onCheckedChange={field.onChange} />
          )}
        />
      </div>

      <div className="flex items-center justify-between">
        <Label htmlFor="ativo">Ativo</Label>
        <Controller
          control={control}
          name="ativo"
          render={({ field }) => (
            <Switch id="ativo" checked={field.value} onCheckedChange={field.onChange} />
          )}
        />
      </div>

      <div className="flex justify-end gap-2 pt-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancelar
        </Button>
        <Button type="submit" disabled={isSubmitting || uploadFoto.isPending}>
          {uploadFoto.isPending
            ? 'Enviando foto...'
            : caso
              ? 'Salvar alterações'
              : 'Criar case'}
        </Button>
      </div>
    </form>
  )
}
