import { MessageCircle } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { buildWhatsAppLink } from '@/lib/contact-info'

interface WhatsAppButtonProps {
  floating?: boolean
  mensagem?: string
}

export function WhatsAppButton({ floating = false, mensagem }: WhatsAppButtonProps) {
  const link = buildWhatsAppLink(mensagem)

  if (floating) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar no WhatsApp"
        className="fixed right-6 bottom-6 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
      >
        <MessageCircle className="size-7" fill="currentColor" strokeWidth={0} />
      </a>
    )
  }

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        buttonVariants({ size: 'lg' }),
        'w-full gap-2 bg-[#25D366] text-white hover:bg-[#25D366]/90',
      )}
    >
      <MessageCircle className="size-5" fill="currentColor" strokeWidth={0} />
      Conversar no WhatsApp
    </a>
  )
}
