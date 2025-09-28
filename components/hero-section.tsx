"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useState, useCallback } from "react"

export function HeroSection() {
  const [videoLoaded, setVideoLoaded] = useState(false)

  const handleVideoLoad = useCallback(() => {
    setVideoLoaded(true)
  }, [])

  const scrollToOffer = useCallback(() => {
    const ofertaSection = document.getElementById("oferta-section")
    if (ofertaSection) {
      ofertaSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }, [])

  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: "#ffffff" }}>
      <div className="absolute inset-0 opacity-5 will-change-transform">
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-200 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-3 py-6 relative z-10">
        <div className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-red-600 text-white px-4 py-2 text-base font-bold">
              ⚡ OFERTA LIMITADA - APENAS HOJE!
            </Badge>

            <div className="space-y-4">
              <h1 className="text-2xl sm:text-3xl font-bold leading-tight text-balance px-2">
                <span style={{ color: "#000000" }}>Ela Perdeu </span>
                <span className="text-red-600">28kg</span>
                <br />
                <span className="text-red-600">com um super aplicativo</span>
                <br />
                <span style={{ color: "#000000" }}>totalmente natural e fácil de usar</span>
              </h1>

              <p className="text-base leading-relaxed px-4" style={{ color: "#374151" }}>
                Emagreça de Uma Vez por Todas e nunca mais volte a Engordar com o nosso programa alimentar
                especializado. Tudo prático e fácil, separado por calorias e com acesso a um aplicativo completo!
              </p>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-lg border mx-2">
              <div className="aspect-video bg-black rounded-lg overflow-hidden relative">
                {!videoLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-red-100 to-orange-100">
                    <div className="text-center space-y-2">
                      <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto animate-pulse">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <p className="text-xs" style={{ color: "#6B7280" }}>
                        Carregando vídeo...
                      </p>
                    </div>
                  </div>
                )}
                <video
                  className="w-full h-full object-cover"
                  controls
                  preload="none"
                  poster="/video-thumbnail.jpg"
                  onLoadedData={handleVideoLoad}
                >
                  <source
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_kQA9cPIlykQO8zMEbeRh2Cahmd9v/ZLVWQ-83W3mSIYZefG2-mE/public/vsl-video.mp4"
                    type="video/mp4"
                  />
                  <div className="flex items-center justify-center h-full bg-gradient-to-br from-red-100 to-orange-100">
                    <div className="text-center space-y-2">
                      <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <p className="text-xs" style={{ color: "#6B7280" }}>
                        Seu navegador não suporta vídeo HTML5
                      </p>
                    </div>
                  </div>
                </video>
              </div>
            </div>

            <div className="space-y-3 px-4">
              <Button
                size="lg"
                className="w-full px-6 py-4 text-base font-bold pulse-glow hover:scale-105 transition-transform min-h-[56px] will-change-transform bg-red-600 hover:bg-red-700 text-white"
                onClick={scrollToOffer}
              >
                🎯 QUERO EMAGRECER AGORA!
              </Button>

              <p className="text-sm text-center px-2" style={{ color: "#4B5563" }}>
                Para mulheres que estão <strong>prontas para uma mudança real</strong> e <strong>duradoura</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
