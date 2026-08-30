export interface ContactFormData {
  nome: string
  email: string
  telefone?: string
  mensagem: string
}

/**
 * Simulação local do envio do formulário de contato.
 * Módulo 6 substitui isto por uma chamada à Edge Function
 * `send-contact-email`, que grava em `contatos` e envia o e-mail.
 */
export async function submitContactForm(data: ContactFormData): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 800))
  console.info('[mock] Formulário de contato enviado:', data)
}
