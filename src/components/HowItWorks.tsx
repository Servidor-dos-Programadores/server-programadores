import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Acessibilidade",
    description:
      "Por ser uma comunidade no discord nós temos mais proximidade para conversar, por chat e calls.",
  },
  {
    icon: <MapIcon />,
    title: "Comunidade",
    description:
      "Converse com pessoas experientes dispostas a te ajudar no que precisar.",
  },
  {
    icon: <PlaneIcon />,
    title: "Escalabilidade",
    description:
      "Temos conteúdos de diversas áreas de TI, você sempre se sentirá incluído na comunidade.",
  },
  {
    icon: <GiftIcon />,
    title: "Administração",
    description:
      "Nossa equipe trabalha diariamente para manter o ambiente agradável para todos, venha fazer parte também.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        Como nossa{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Comunidade{" "}
        </span>
        funciona
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Abaixo separamos um guia de como nossa comunidade permanece auxiliando entusiastas
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
