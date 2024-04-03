import { Radar } from "lucide-react";

interface SponsorProps {
  icon: JSX.Element;
  name: string;
}

const sponsors: SponsorProps[] = [
  {
    icon: <Radar size={34} />,
    name: "Caio Andres",
  },
  {
    icon: <Radar size={34} />,
    name: "Eduardo Dias",
  },
  {
    icon: <Radar size={34} />,
    name: "Mateus Lima",
  },
  {
    icon: <Radar size={34} />,
    name: "Aest",
  },
  {
    icon: <Radar size={34} />,
    name: "Juliano Dias",
  },
  {
    icon: <Radar size={34} />,
    name: "Dan",
  },
  {
    icon: <Radar size={34} />,
    name: "Borsa",
  }
];

export const Sponsors = () => {
  return (
    <section
      id="sponsors"
      className="container pt-24 sm:py-32"
    >
      <h2 className="text-center text-md lg:text-xl font-bold mb-8 text-primary">
        Fundadores e Investidores
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
        {sponsors.map(({ icon, name }: SponsorProps) => (
          <div
            key={name}
            className="flex items-center gap-1 text-muted-foreground/60"
          >
            <span>{icon}</span>
            <h3 className="text-xl  font-bold">{name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};