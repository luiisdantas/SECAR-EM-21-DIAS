import { Card, CardContent } from "@/components/ui/card"

export function TestimonialsSection() {
  return (
    <section className="py-8 bg-gradient-to-br from-purple-900 to-purple-800">
      <div className="container mx-auto px-3">
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 leading-tight px-2 drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
            Junte-se a mulheres que seguiram o guia e hoje estão felizes e realizadas
          </h2>
        </div>

        <div className="space-y-4">
          {/* Video Testimonials */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 mx-2">
            <CardContent className="p-4">
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/i_3uSFyE1kE"
                  title="Depoimento da Jessica"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 mx-2">
            <CardContent className="p-4">
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/lnUimeT4aso"
                  title="Depoimento da Carla"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 mx-2">
            <CardContent className="p-4">
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/XCDmdTq5Ijk"
                  title="Depoimento da Karine"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
