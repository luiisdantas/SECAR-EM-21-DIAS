import { Card, CardContent } from "@/components/ui/card"

export function ResultsSection() {
  const results = [
    {
      image: "/antes-depois-emagrecimento-1.jpg",
      name: "Maria Silva",
      result: "-15kg em 20 dias",
    },
    {
      image: "/antes-depois-emagrecimento-2.jpg",
      name: "Ana Costa",
      result: "-22kg em 20 dias",
    },
    {
      image: "/antes-depois-emagrecimento-3.jpg",
      name: "Carla Santos",
      result: "-18kg em 20 dias",
    },
    {
      image: "/antes-depois-emagrecimento-4.jpg",
      name: "Lucia Oliveira",
      result: "-25kg em 20 dias",
    },
  ]

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-3">
        <div className="text-center space-y-4 mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground px-2">
            Confira resultados reais de nossas clientes!
          </h2>
          <p className="text-base text-muted-foreground px-4">Resultados transformadores logo nas primeiras semanas</p>
        </div>

        <div className="grid grid-cols-2 gap-3 px-2">
          {results.map((result, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <img
                  src={result.image || "/placeholder.svg"}
                  alt={`Resultado de ${result.name}`}
                  className="w-full h-40 object-cover"
                />
                <div className="p-2 text-center">
                  <h3 className="font-semibold text-foreground text-xs">{result.name}</h3>
                  <p className="text-primary font-bold text-xs">{result.result}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
