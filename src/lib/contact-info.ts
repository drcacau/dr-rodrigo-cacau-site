export const ENDERECO =
  'Av. Governador João Durval Carneiro, nº 3803 — Edifício Charmant Hotel & Business, sala 312, 3º Andar, Bairro Caseb, Feira de Santana - BA, CEP 44.051-605'
export const TELEFONE = '(75) 99933-0478'
export const EMAIL = 'rec.drcacau@gmail.com'

export const WHATSAPP_NUMBER = '5575999330478'
export const WHATSAPP_MENSAGEM_PADRAO = 'Olá, gostaria de agendar uma consulta'

export function buildWhatsAppLink(mensagem: string = WHATSAPP_MENSAGEM_PADRAO) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`
}

export const WHATSAPP_LINK = buildWhatsAppLink()

export const HORARIOS = [
  { dia: 'Segunda a sexta', horario: '08h às 18h' },
  { dia: 'Sábado', horario: '08h às 12h' },
  { dia: 'Domingo', horario: 'Fechado' },
]
