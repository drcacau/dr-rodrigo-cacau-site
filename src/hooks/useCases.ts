import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { supabase } from '@/lib/supabase'
import type { Case } from '@/types'

export function useCases() {
  return useQuery({
    queryKey: ['cases', 'public'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('cases')
        .select('*')
        .eq('ativo', true)
        .order('ordem', { ascending: true })
      if (error) throw error
      return data as Case[]
    },
  })
}

export function useAllCases() {
  return useQuery({
    queryKey: ['cases', 'admin'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('cases')
        .select('*')
        .order('ordem', { ascending: true })
      if (error) throw error
      return data as Case[]
    },
  })
}

export type CaseInput = Omit<Case, 'id' | 'created_at'>

export function useCreateCase() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (input: CaseInput) => {
      const { data, error } = await supabase.from('cases').insert(input).select().single()
      if (error) throw error
      return data as Case
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cases'] })
    },
  })
}

export function useUpdateCase() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async ({ id, ...input }: Partial<CaseInput> & { id: string }) => {
      const { data, error } = await supabase
        .from('cases')
        .update(input)
        .eq('id', id)
        .select()
        .single()
      if (error) throw error
      return data as Case
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cases'] })
    },
  })
}

export function useUploadCaseFoto() {
  return useMutation({
    mutationFn: async (file: File) => {
      const path = `${crypto.randomUUID()}-${file.name}`
      const { error } = await supabase.storage.from('cases-fotos').upload(path, file)
      if (error) throw error
      const { data } = supabase.storage.from('cases-fotos').getPublicUrl(path)
      return data.publicUrl
    },
  })
}
