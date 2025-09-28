import dynamic from "next/dynamic"
import { HeroSection } from "@/components/hero-section"

const ResultsSection = dynamic(
  () => import("@/components/results-section").then((mod) => ({ default: mod.ResultsSection })),
  {
    loading: () => <div className="h-32 animate-pulse bg-muted" />,
  },
)

const BenefitsSection = dynamic(
  () => import("@/components/benefits-section").then((mod) => ({ default: mod.BenefitsSection })),
  {
    loading: () => <div className="h-32 animate-pulse bg-muted" />,
  },
)

const HowItWorksSection = dynamic(
  () => import("@/components/how-it-works-section").then((mod) => ({ default: mod.HowItWorksSection })),
  {
    loading: () => <div className="h-32 animate-pulse bg-muted" />,
  },
)

const TestimonialsSection = dynamic(
  () => import("@/components/testimonials-section").then((mod) => ({ default: mod.TestimonialsSection })),
  {
    loading: () => <div className="h-32 animate-pulse bg-muted" />,
  },
)

const BonusSection = dynamic(
  () => import("@/components/bonus-section").then((mod) => ({ default: mod.BonusSection })),
  {
    loading: () => <div className="h-32 animate-pulse bg-muted" />,
  },
)

const PricingSection = dynamic(
  () => import("@/components/pricing-section").then((mod) => ({ default: mod.PricingSection })),
  {
    loading: () => <div className="h-32 animate-pulse bg-muted" />,
  },
)

const GuaranteeSection = dynamic(
  () => import("@/components/guarantee-section").then((mod) => ({ default: mod.GuaranteeSection })),
  {
    loading: () => <div className="h-32 animate-pulse bg-muted" />,
  },
)

const FAQSection = dynamic(() => import("@/components/faq-section").then((mod) => ({ default: mod.FAQSection })), {
  loading: () => <div className="h-32 animate-pulse bg-muted" />,
})

const FooterSection = dynamic(
  () => import("@/components/footer-section").then((mod) => ({ default: mod.FooterSection })),
  {
    loading: () => <div className="h-32 animate-pulse bg-muted" />,
  },
)

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ResultsSection />
      <BenefitsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <BonusSection />
      <PricingSection />
      <GuaranteeSection />
      <FAQSection />
      <FooterSection />
    </main>
  )
}
