import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://i.imgur.com/zlRP3m2b.jpg",
    name: "aest",
    userName: "@aest2023",
    comment: "Vocês me ajudaram muito!",
  },
  {
    image: "https://i.imgur.com/mjr7ElJb.jpg",
    name: "Peuh",
    userName: "@peuh1383",
    comment:
      "Primeiro server que realmente me ajudou, brigadão demais",
  },

  {
    image: "https://i.imgur.com/r8ikpfUb.jpg",
    name: "Nanda",
    userName: "@nandalinda1984",
    comment:
      "Estava quebrando a cabeça aqui, muito obrigado pela ajuda.",
  },
  {
    image: "https://i.imgur.com/ggwo7Aeb.jpg",
    name: "fags.gabriel",
    userName: "@fagundes_gabriel",
    comment:
      "Top demais o design do server.",
  },
  {
    image: "https://i.imgur.com/5Rxg5vib.jpg",
    name: "Gabriel Dev",
    userName: "@obielribeiro",
    comment:
      "Pow vei, ajudou demais aqui slk.",
  },
  {
    image: "https://i.imgur.com/klW6Qwyb.jpg",
    name: "thiagoocms",
    userName: "@thiagoocms",
    comment:
      "Não estava entenendo na faculdade mas agora saquei de boa, valeu pela explicação!",
  },
  {
    image: "https://i.imgur.com/70muJcyb.jpg",
    name: "name = arthur",
    userName: "@thurflecks",
    comment:
      "Nem o chatgpt me ajudou tanto assim kkkkkk",
  },
  {
    image: "https://i.imgur.com/PMjrzi9b.jpg",
    name: "! Dan",
    userName: "@dan7_3.dev",
    comment:
      "Os caras explicam muito bem.",
  },
  {
    image: "https://i.imgur.com/iDv7xPzb.jpg",
    name: "Lock XV",
    userName: "@jotax.fpss",
    comment:
      "Top demais.",
  },
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        Por que as 
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          pessoas amam{" "}
        </span>
        nossa Comunidade?
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
      Aqui, compartilhamos conhecimento, experiências e ideias de forma colaborativa, promovendo o crescimento pessoal e profissional de cada indivíduo. 
      A diversidade de pontos de vista enriquece nossas discussões, enquanto o respeito mútuo e a empatia criam conexões genuínas entre os participantes.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage
                    alt=""
                    src={image}
                  />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
