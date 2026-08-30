import { supabase } from '@/lib/supabase'

export interface ContactFormData {
  nome: string
  email: string
  telefone?: string
  mensagem: string
}

export async function submitContactForm(data: ContactFormData): Promise<void> {
  const { error } = await supabase.functions.invoke('send-contact-email', {
    body: data,
  })
  if (error) throw error
}
