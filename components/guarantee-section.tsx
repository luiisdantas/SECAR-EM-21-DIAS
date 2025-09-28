import { Shield } from "lucide-react"

export function GuaranteeSection() {
  return (
    <section className="py-8 bg-gradient-to-r from-blue-900 to-purple-800">
      <div className="container mx-auto px-3">
        <div className="space-y-6">
          <div className="space-y-4 text-center">
            <div className="bg-black/70 rounded-lg p-4 mx-2">
              <h2 className="text-xl sm:text-2xl font-bold text-white uppercase leading-tight px-2 drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
                RESULTADOS GARANTIDOS OU SEU DINHEIRO DE VOLTA!
              </h2>
            </div>

            <div className="space-y-3 text-white text-sm px-4 drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
              <p>Compre o Método Secar em 20 Dias Hoje e tenha um arrependimento de 7 Dias</p>
              <p>
                Se você não gostar ou não se adaptar ao nosso método, basta enviar um e-mail para:
                <br />
                <strong>suportecliente@monevo.com.br</strong>
              </p>
              <p>
                Se sua mensagem for enviada dentro do prazo de 7 Dias iremos cancelar sua compra imediatamente e
                devolvemos todo o seu dinheiro
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <img src="/garantia-7-dias-selo-dourado.jpg" alt="Garantia de 7 dias" className="w-48 h-48" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Shield className="w-12 h-12 text-yellow-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
