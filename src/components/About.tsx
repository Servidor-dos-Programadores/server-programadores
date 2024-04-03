import { Statistics } from "./Statistics";
import pilot from "../assets/comunidade-removebg-preview.png";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  Nossa{" "}
                </span>
                Comunidade
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
              Nossa comunidade é uma vibrante rede de programadores seniors, mentores e tech leaders engajados em promover a excelência e o crescimento profissional no campo da tecnologia. 
              Compartilhamos conhecimento, experiências e melhores práticas para capacitar uns aos outros e impulsionar a inovação. 
              Nosso foco é fornecer um ambiente acolhedor e colaborativo para todos os membros, incluindo estudantes, onde podem aprender, crescer e se conectar com outros profissionais da área. 
              Juntos, estamos construindo um futuro tecnológico mais inclusivo, diversificado e promissor. 
              Junte-se a nós para fazer parte dessa jornada emocionante!
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
