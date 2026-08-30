import { Helmet } from 'react-helmet-async'
import { HeroSection } from '@/components/home/HeroSection'
import { DiferenciaisGrid } from '@/components/home/DiferenciaisGrid'
import { CasesPreview } from '@/components/home/CasesPreview'
import { CTABanner } from '@/components/home/CTABanner'

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Dr. Rodrigo Cacau — Cardiologista em Feira de Santana</title>
        <meta
          name="description"
          content="Cardiologia clínica e medicina integrada em Feira de Santana - BA. Agende sua consulta."
        />
      </Helmet>
      <HeroSection />
      <DiferenciaisGrid />
      <CasesPreview />
      <CTABanner />
    </>
  )
}
