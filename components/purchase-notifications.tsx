"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"

const nomes = [
  "Maria Silva",
  "Ana Costa",
  "Carla Santos",
  "Juliana Oliveira",
  "Fernanda Lima",
  "Patricia Souza",
  "Roberta Alves",
  "Camila Ferreira",
  "Luciana Pereira",
  "Gabriela Rocha",
  "Mariana Cardoso",
  "Beatriz Martins",
  "Renata Barbosa",
  "Daniela Ribeiro",
  "Vanessa Gomes",
  "Cristina Dias",
  "Simone Castro",
  "Adriana Moura",
  "Claudia Nunes",
  "Priscila Ramos",
  "Tatiana Correia",
  "Viviane Teixeira",
  "Sabrina Mendes",
  "Elaine Campos",
  "Monica Vieira",
  "Leticia Araujo",
  "Bruna Machado",
  "Larissa Freitas",
  "Natalia Cunha",
  "Jessica Pinto",
]

export function PurchaseNotifications() {
  const [currentNotification, setCurrentNotification] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const showNotification = () => {
      const randomName = nomes[Math.floor(Math.random() * nomes.length)]
      setCurrentNotification(randomName)
      setIsVisible(true)

      setTimeout(() => {
        setIsVisible(false)
        setTimeout(() => {
          setCurrentNotification(null)
        }, 500) // Aguarda animação de saída
      }, 4000)
    }

    const initialTimeout = setTimeout(showNotification, 3000)

    const interval = setInterval(() => {
      const randomDelay = Math.random() * 7000 + 8000 // Entre 8-15 segundos
      setTimeout(showNotification, randomDelay)
    }, 15000)

    return () => {
      clearTimeout(initialTimeout)
      clearInterval(interval)
    }
  }, [])

  if (!currentNotification) return null

  return (
    <div className="fixed bottom-20 left-0 z-50 max-w-[280px]">
      <Card
        className={`
          bg-green-600 border-green-500 text-white shadow-lg
          transition-all duration-500 ease-in-out transform
          ${isVisible ? "translate-x-0 opacity-100 scale-100" : "-translate-x-full opacity-0 scale-95"}
        `}
      >
        {/* Reduzindo padding de py-1 px-2 para deixar mais rente */}
        <div className="py-1 px-2 flex items-center gap-2">
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-xs font-bold">
            {currentNotification
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>

          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium leading-tight">
              <span className="font-bold">{currentNotification}</span>
            </p>
            <p className="text-[10px] text-green-100 mt-0.5">acabou de adquirir o produto 🎉</p>
          </div>
        </div>
      </Card>
    </div>
  )
}
