import { Button } from "./ui/button";
//import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
//import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              Servidor
            </span>{" "}
            
          </h1>{" "}
          dos{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              Programadores
            </span>{" "}
            
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
        Junte-se à nossa comunidade de mentes criativas, explore recursos exclusivos, participe de desafios emocionantes e mergulhe em discussões profundas sobre as últimas tendências tecnológicas. Seja parte de uma comunidade vibrante e inspiradora.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3">Juntar-se</Button>

        {/* <a
          href="https://github.com/leoMirandaa/shadcn-landing-page.git"
          target="_blank"
          className={`w-full md:w-1/3 ${buttonVariants({
            variant: "outline",
          })}`}
        >
          Github Repository
          <GitHubLogoIcon className="ml-2 w-5 h-5" />
        </a> */}
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
