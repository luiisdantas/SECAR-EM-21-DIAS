import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Como eu vou receber esse guia?",
      answer:
        "O acesso ao produto é de imediato para pagamentos por Cartão ou Pix. Você vai receber o acesso ao programa pelo seu e-mail. Caso não consiga acessar pelo e-mail, nos envie uma mensagem que entraremos em contato com você para te enviar o acesso pelo seu WhatsApp",
    },
    {
      question: "Esse programa é um Aplicativo?",
      answer:
        "Isso mesmo, ele é um aplicativo onde você consegue instalar no seu celular, para iPhone ou Android, muito fácil e prático onde você irá conseguir acessar todos os conteúdos e bônus com facilidade!",
    },
    {
      question: "Os Alimentos são Caros?",
      answer:
        "Nossas receitas são muito fáceis e práticas, e você pode estar fazendo com ingredientes que você tem na sua casa",
    },
    {
      question: "Tenho que pagar todo mês?",
      answer: "Não, seu pagamento é somente uma vez e o aplicativo é todas as suas atualizações para sempre!",
    },
    {
      question: "Existe alguma garantia que o programa funciona?",
      answer: "Nós confiamos tanto em nossos estudos e pesquisas que lhe garantimos 7 dias de garantia incondicional!",
    },
    {
      question: "Em quanto tempo vou ter resultados com o que vou aprender nesse programa?",
      answer:
        "Em alguns dias depois de começar. Quanto mais você fizer disso parte de sua rotina diária, mais rápido você vai obter os resultados que deseja",
    },
  ]

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-3">
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Perguntas Frequentes</h2>
        </div>

        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-lg px-3 mx-2"
            >
              <AccordionTrigger className="text-left font-semibold text-card-foreground hover:no-underline text-sm py-3">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-sm pb-3">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
