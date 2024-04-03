import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../assets/people.png";
import image3 from "../assets/interface.png";
import image4 from "../assets/responsivity.png";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Responsividade",
    description:
      "Acesse nossa página de onde, quando e como quiser com nosso design responsivo que se adapta a qualquer resolução.",
    image: image4,
  },
  {
    title: "Interface Intuitiva",
    description:
      "Temos a prioridade em deixar nossa página minimalista e intuitiva, deixando tudo mais fácil pra você.",
    image: image3,
  },
  {
    title: "Fácil Comunicação",
    description:
      "Entre em contato conosco quando quiser através de emails ou redes sociais, vamos adorar te conhecer e ouvir o que nos tem a dizer.",
    image: image,
  },
];

const featureList: string[] = [
  "Tema Escuro/Claro",
  "Reviews de Código",
  "Features",
  "Mentoria",
  "Contato",
  "Administração",
  "Responsividade",
  "Newsletter",
  "Design minimalista",
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Muitas{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Implementações
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
