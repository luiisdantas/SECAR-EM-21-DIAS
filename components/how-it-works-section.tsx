"use client"

import { Button } from "@/components/ui/button"

export function HowItWorksSection() {
  const benefits = [
    "Livrar-se da gordura que te incomoda",
    "Treinar sua mente para não sentir fome excessiva",
    "Aumentar a saciedade",
    "Comer comidas gostosas sem culpa",
    "Nunca mais sofrer com o efeito rebote",
  ]

  return (
    <section className="py-8 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto space-y-6">
          {/* Content - Mobile First */}
          <div className="space-y-6">
            <div className="space-y-3 text-center">
              <p className="bg-gradient-to-r from-red-400 via-pink-400 to-red-500 bg-clip-text text-transparent uppercase tracking-wider text-sm font-bold">
                COMO FUNCIONA
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight px-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                Durante os próximos 20 dias você terá acesso ao passo a passo completo capaz de eliminar toda gordura
                indesejada,{" "}
                <span className="text-yellow-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  mudando seus hábitos mentais
                </span>
              </h2>
            </div>

            <div className="space-y-4">
              <p className="text-white text-base text-center px-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                Após seguir o cronograma de 20 dias você irá:
              </p>

              <ul className="space-y-2 px-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-yellow-300 flex-shrink-0 mt-0.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                      ✅
                    </span>
                    <span className="text-white text-sm drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="px-4">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-6 text-base font-bold w-full min-h-[64px] animate-pulse-delayed rounded-lg border-2 border-yellow-400"
                onClick={() => {
                  const ofertaSection = document.getElementById("oferta-section")
                  if (ofertaSection) {
                    ofertaSection.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    })
                  }
                }}
              >
                <span className="text-center leading-tight text-base font-bold break-words">
                  SIM, QUERO EMAGRECER AGORA!
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
