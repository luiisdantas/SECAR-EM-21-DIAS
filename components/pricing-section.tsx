"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState, useEffect } from "react"

export function PricingSection() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 15,
    seconds: 0,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { hours, minutes, seconds } = prevTime

        if (seconds > 0) {
          seconds--
        } else if (minutes > 0) {
          minutes--
          seconds = 59
        } else if (hours > 0) {
          hours--
          minutes = 59
          seconds = 59
        } else {
          return { hours: 0, minutes: 15, seconds: 0 }
        }

        return { hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="oferta-section" className="py-8 bg-gradient-to-br from-green-800 to-green-600">
      <div className="container mx-auto px-4">
        <Card className="mx-auto max-w-md bg-black/80 backdrop-blur-sm border-white/20">
          <CardContent className="p-6 text-center space-y-4">
            <div className="relative">
              <Badge className="bg-red-600 text-white px-3 py-1.5 animate-pulse text-xs border-2 border-yellow-400">
                ⚠️ ATENÇÃO - OFERTA LIMITADA!
              </Badge>
            </div>

            <h2 className="text-xl font-bold text-white leading-tight">
              Últimas <span className="text-yellow-400">10 vagas</span> com desconto especial
            </h2>

            <div className="space-y-2">
              <p className="text-white text-xs uppercase tracking-wider">⏰ Oferta expira em:</p>

              <div className="bg-red-600 rounded-lg p-3 inline-block border-2 border-yellow-400">
                <div className="flex gap-2 text-white font-bold text-lg">
                  <div className="text-center">
                    <div>{String(timeLeft.hours).padStart(2, "0")}</div>
                    <div className="text-xs">HORAS</div>
                  </div>
                  <div>:</div>
                  <div className="text-center">
                    <div>{String(timeLeft.minutes).padStart(2, "0")}</div>
                    <div className="text-xs">MIN</div>
                  </div>
                  <div>:</div>
                  <div className="text-center">
                    <div>{String(timeLeft.seconds).padStart(2, "0")}</div>
                    <div className="text-xs">SEG</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-white">
                <p className="text-sm line-through text-red-300">De R$ 197,00 por apenas</p>
                <p className="text-2xl font-bold text-yellow-400">8X de R$ 5,51</p>
                <p className="text-3xl font-bold text-white">ou R$ 37,90 à vista</p>
              </div>
            </div>

            <div className="px-2">
              <Button
                size="lg"
                className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-6 text-base font-bold min-h-[64px] border-2 border-yellow-400 animate-pulse-delayed flex items-center justify-center rounded-lg"
                onClick={() => window.open("https://pay.kiwify.com.br/dBz3cJt?afid=GQWSqRGo", "_blank")}
              >
                <span className="text-center leading-tight text-base font-bold break-words">
                  GARANTIR MINHA VAGA AGORA!
                </span>
              </Button>
            </div>

            <p className="text-white/80 text-xs italic">✅ PAGAMENTO ÚNICO • SEM MENSALIDADES • 100% SEGURO</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
