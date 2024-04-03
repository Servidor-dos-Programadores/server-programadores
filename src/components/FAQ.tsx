import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Preciso ter uma conta no discord para acessar a comunidade?",
    answer: "Sim, é necessário possuir uma conta no discord para acessar nosso servidor.",
    value: "item-1",
  },
  {
    question: "Devo ser um programador para entrar na comunidade?",
    answer:
      "Não! Você que é apenas um entusiasta ou apenas se sentiu curioso sinta-se a vontade para entrar e interagir conosco.",
    value: "item-2",
  },
  {
    question:
      "Posso divulgar meus trabalhos na comunidade?",
    answer:
      "Pode sim, inclusive o encorajamos a fazer isso, sempre alguém está precisando de auxílio ou de um programador mais experiente para uma vaga.",
    value: "item-3",
  },
  {
    question: "Como posso participar da equipe administrativa?",
    answer: "Você pode entrar em nossa equipe quando quiser! Apenas precisamos de seu comprometimento e que você se sinta confiante em auxiliar as outras pessoas.",
    value: "item-4",
  },
  {
    question:
      "Comecei agora no mundo da programação, lá encontrarei conteúdos introdutórios?",
    answer:
      "Com certeza! Temos por obrigação te auxiliar em seus primeiros passos como programador e incentivá-lo sobre qual carreira você pode se identificar e seguir!",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Perguntas{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Frequentes
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Não encontrou sua dúvida?{" "}
        <a
          href="https://discord.gg/FVDXNpS7"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Entre em contato
        </a>
      </h3>
    </section>
  );
};
