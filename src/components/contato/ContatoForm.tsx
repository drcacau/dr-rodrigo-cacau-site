import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { submitContactForm } from '@/services/contactService'

const contatoSchema = z.object({
  nome: z.string().trim().min(2, 'Informe seu nome completo.'),
  email: z.email('Informe um e-mail válido.'),
  telefone: z.string().trim().optional(),
  mensagem: z.string().trim().min(10, 'Conte um pouco mais sobre o que você precisa.'),
})

type ContatoFormValues = z.infer<typeof contatoSchema>

export function ContatoForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContatoFormValues>({
    resolver: zodResolver(contatoSchema),
  })

  async function onSubmit(values: ContatoFormValues) {
    try {
      await submitContactForm(values)
      toast.success('Mensagem enviada com sucesso! Em breve entraremos em contato.')
      reset()
    } catch {
      toast.error('Não foi possível enviar sua mensagem. Tente novamente.')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <div className="space-y-1.5">
        <Label htmlFor="nome">Nome</Label>
        <Input id="nome" autoComplete="name" {...register('nome')} />
        {errors.nome && <p className="text-sm text-destructive">{errors.nome.message}</p>}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="email">E-mail</Label>
        <Input id="email" type="email" autoComplete="email" {...register('email')} />
        {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="telefone">Telefone</Label>
        <Input id="telefone" type="tel" autoComplete="tel" {...register('telefone')} />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="mensagem">Mensagem</Label>
        <Textarea id="mensagem" rows={5} {...register('mensagem')} />
        {errors.mensagem && (
          <p className="text-sm text-destructive">{errors.mensagem.message}</p>
        )}
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
      </Button>
    </form>
  )
}
