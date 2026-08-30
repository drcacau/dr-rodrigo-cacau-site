import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { supabase } from '@/lib/supabase'
import type { Contato } from '@/types'

export function useContatos() {
  return useQuery({
    queryKey: ['contatos'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('contatos')
        .select('*')
        .order('created_at', { ascending: false })
      if (error) throw error
      return data as Contato[]
    },
  })
}

export function useUpdateContato() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async ({ id, ...input }: Partial<Pick<Contato, 'lido' | 'respondido'>> & { id: string }) => {
      const { data, error } = await supabase
        .from('contatos')
        .update(input)
        .eq('id', id)
        .select()
        .single()
      if (error) throw error
      return data as Contato
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contatos'] })
    },
  })
}
