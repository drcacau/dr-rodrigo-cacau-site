export type CaseTipo = 'texto' | 'video'

export interface Case {
  id: string
  tipo: CaseTipo
  paciente: string | null
  condicao: string | null
  depoimento: string | null
  video_url: string | null
  foto_url: string | null
  destaque: boolean
  ativo: boolean
  ordem: number
  created_at: string
}

export interface Contato {
  id: string
  nome: string
  email: string
  telefone: string | null
  mensagem: string
  lido: boolean
  respondido: boolean
  created_at: string
}
