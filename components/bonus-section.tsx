import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function BonusSection() {
  const bonuses = [
    {
      image: "/alongamento-mobilidade-exercicios.jpg",
      title: "Alongamento e Mobilidade",
      description:
        "Receba uma esteira de exercícios para alongamento e mobilidade corporal, todos em vídeo aulas completos e Personalizados dentro do nosso aplicativo.",
    },
    {
      image: "/receitas-low-carb-250.jpg",
      title: "250 Receitas Low Carb",
      description:
        "250 receitas low carb para uma jornada deliciosa e saudável. De pratos principais a sobremesas, descubra opções saborosas que se alinham ao estilo de vida de baixo carboidrato.",
    },
    {
      image: "/treinos-casa-exercicios.jpg",
      title: "Treinos em Casa",
      description:
        "Desperte sua energia com nosso circuito de exercícios para casa, perfeito para quem busca resultados sem academia ou tempo escasso.",
    },
    {
      image: "/treinos-gestantes-gravidez.jpg",
      title: "Treinos Para Gestantes",
      description:
        "Você também irá receber um circuito de exercícios para gestantes desde o alongamento e mobilidade inicial a outros treinos mais avançados com auxílio da nossa personal!",
    },
  ]

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-3">
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 leading-tight px-2">
            <strong>Dê uma olhada agora:</strong> nos BÔNUS que você vai ter acesso nesse curso completo
          </h2>
        </div>

        <div className="space-y-4">
          {bonuses.map((bonus, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-gradient-to-br from-purple-900 to-purple-800 border-0 shadow-xl mx-2"
            >
              <CardContent className="p-0">
                <div className="space-y-0">
                  <div className="p-4 flex items-center justify-center">
                    <img
                      src={bonus.image || "/placeholder.svg"}
                      alt={bonus.title}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                  </div>
                  <div className="p-4 pt-0">
                    <div className="space-y-2">
                      <div>
                        <h3 className="text-lg font-bold text-white uppercase mb-2 text-center drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
                          {bonus.title} - <Badge className="bg-yellow-500 text-black text-xs font-bold">BÔNUS</Badge>
                        </h3>
                      </div>
                      <p className="text-white leading-relaxed text-sm text-center drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
                        {bonus.description}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
