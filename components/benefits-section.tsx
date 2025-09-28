import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function BenefitsSection() {
  const benefits = [
    {
      iconSrc: "/images/icone-1.png",
      title: "Emagrecer Comendo",
      description:
        "Seguindo o nosso plano alimentar, você vai perceber que poderá perder peso comendo de forma gostosa e saudável, sem ter que largar o seu pão francês ou seus alimentos prediletos",
    },
    {
      iconSrc: "/images/icone-2.png",
      title: "Mudança de Corpo",
      description:
        "Nosso programa além de potencializar o seu emagrecimento, você verá diferença corporal e redução das suas medidas",
    },
    {
      iconSrc: "/images/icone-3.png",
      title: "Autoestima Renovada",
      description:
        "Comece a ver resultados logo nas primeiras semanas, sinta a felicidade de ver a transformação do seu corpo e da sua saúde",
    },
  ]

  return (
    <section className="py-8 bg-red-900">
      <div className="container mx-auto px-3">
        <div className="text-center mb-8">
          <div className="bg-black/50 rounded-lg p-4 mx-2">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 leading-tight px-2 drop-shadow-2xl">
              EM APENAS 20 DIAS VOCÊ VAI MUDAR
              <br />
              SUA VIDA PARA SEMPRE!
            </h2>
          </div>
        </div>

        <div className="space-y-4">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="bg-black/60 backdrop-blur-sm border-white/20 hover:bg-black/70 transition-colors mx-2"
            >
              <CardContent className="p-4 text-center space-y-3">
                <div className="w-12 h-12 flex items-center justify-center mx-auto">
                  <Image
                    src={benefit.iconSrc || "/placeholder.svg"}
                    alt={benefit.title}
                    width={48}
                    height={48}
                    className="w-12 h-12"
                  />
                </div>
                <h3 className="text-lg font-bold text-white uppercase drop-shadow-lg">{benefit.title}</h3>
                <p className="text-white leading-relaxed text-sm drop-shadow-md">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
