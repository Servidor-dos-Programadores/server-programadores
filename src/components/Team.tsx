import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import image from "../assets/caio.jpg";
import image3 from "../assets/matt-2.jpg";
import image4 from "../assets/eduardo.jfif";
import image5 from "../assets/juliano.jfif";

interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  description: string; 
  socialNetworks: SocialNetworkProps[];
}

interface SocialNetworkProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: image,
    name: "Caio Andres",
    position: "Fundador",
    description: "Estou muito contente em apresentar essa comunidade para todos vocês!",
    socialNetworks: [
      { name: "Linkedin", url: "linkedin.com/in/caio-porto-oliveira" },
      { name: "Instagram", url: "instagram.com/caio_andress" },
    ],
  },
  {
    imageUrl: image4,
    name: "Eduardo Dias",
    position: "Desenvolvedor Fullstack",
    description: "Estou sempre á disposição de todos para ajudar com o que precisarem.",
    socialNetworks: [
      { name: "Linkedin", url: "https://www.linkedin.com/in/eduardo-dias-86a269271/" },
      { name: "Instagram", url: "https://www.instagram.com/eduardoo.js/" },
    ],
  },
  {
    imageUrl: image3,
    name: "Mateus Lima",
    position: "Desenvolvedor Front-End",
    description: "Desejo á todos os novos membros que se sintam confortáveis em nossa comunidade.",
    socialNetworks: [
      { name: "Linkedin", url: "https://www.linkedin.com/in/mateus-lima-18a074290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
      { name: "Instagram", url: "https://www.instagram.com/matts_._?igsh=bTQzcDU4dmVqbDNn&utm_source=qr" },
    ],
  },
  {
    imageUrl: image5,
    name: "Juliano Dias",
    position: "Desenvolvedor Front-End",
    description: "Tenho o dever de auxiliar todos os novos e antigos membros, todos merecem uma carreira promissora na área.",
    socialNetworks: [
      { name: "Linkedin", url: "https://www.linkedin.com/in/juliano-dias-1a35632b8/" },
      { name: "Instagram", url: "https://www.instagram.com/diass027?igsh=MXI5ODhyODNtaTFsaQ%3D%3D&utm_source=qr" },
    ],
  },
];

export const Team = () => {
  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case "Linkedin":
        return <Linkedin size="20" />;

      case "Facebook":
        return <Facebook size="20" />;

      case "Instagram":
        return <Instagram size="20" />;
      
      default:
        return null;
    }
  };

  return (
    <section
      id="team"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        Conheça a nossa{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Administração
        </span>
      </h2>

      <p className="mt-4 mb-10 text-xl text-muted-foreground">
        Alguns do nosso time que buscam melhorar a comunidade a cada dia
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-10">
        {teamList.map(({ imageUrl, name, position, description, socialNetworks }: TeamProps) => (
          <Card
            key={name}
            className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center"
          >
            <CardHeader className="mt-8 flex justify-center items-center pb-2">
              <img
                src={imageUrl}
                alt={`${name} ${position}`}
                className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
              />
              <CardTitle className="text-center">{name}</CardTitle>
              <CardDescription className="text-primary">{position}</CardDescription>
            </CardHeader>

            <CardContent className="text-center pb-2">
              <p>{description}</p> {/* Exibindo a descrição específica para cada pessoa */}
            </CardContent>

            <CardFooter>
              {socialNetworks.map(({ name, url }: SocialNetworkProps) => (
                <div key={name}>
                  <a
                    href={url}
                    target="_blank"
                    className={buttonVariants({
                      variant: "ghost",
                      size: "sm",
                    })}
                  >
                    <span className="sr-only">{name} icon</span>
                    {socialIcon(name)}
                  </a>
                </div>
              ))}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
