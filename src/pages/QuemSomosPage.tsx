import { Helmet } from 'react-helmet-async'
import { BiografiaSection } from '@/components/quem-somos/BiografiaSection'
import { AbordagemSection } from '@/components/quem-somos/AbordagemSection'
import { ConsultorioGaleria } from '@/components/quem-somos/ConsultorioGaleria'
import { MapaEndereco } from '@/components/quem-somos/MapaEndereco'

export function QuemSomosPage() {
  return (
    <>
      <Helmet>
        <title>Sobre o Dr. Rodrigo Cacau — Medicina Integrada</title>
        <meta
          name="description"
          content="Conheça a trajetória e a abordagem integrativa do Dr. Rodrigo Cacau, cardiologista em Feira de Santana."
        />
      </Helmet>
      <BiografiaSection />
      <AbordagemSection />
      <ConsultorioGaleria />
      <MapaEndereco />
    </>
  )
}
