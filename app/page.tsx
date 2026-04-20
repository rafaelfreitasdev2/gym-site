import { Hero } from '@/components/hero'
import { Diferenciais } from '@/components/diferenciais'
import { Galeria } from '@/components/galeria'
import { Modalidades } from '@/components/modalidades'
import { Planos } from '@/components/planos'
import { Produtos } from '@/components/produtos'
import { Depoimentos } from '@/components/depoimentos'
import { Horarios } from '@/components/horarios'
import { Sobre } from '@/components/sobre'
import { Contato } from '@/components/contato'
import { FAQ } from '@/components/faq'
import { CTAFinal } from '@/components/cta-final'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Diferenciais />
      <Galeria />
      <Modalidades />
      <Planos />
      <Produtos />
      <Depoimentos />
      <Horarios />
      <Sobre />
      <Contato />
      <FAQ />
      <CTAFinal />
      <Footer />
    </main>
  )
}
