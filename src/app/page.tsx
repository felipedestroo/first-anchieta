import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-100 to-blue-200 px-4 py-16">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          {/* First Row */}
          <div className="flex items-center justify-center">
            <Image
              src="/photo1.png"
              alt="Grupo de mulheres reunidas sobre mulheres no meio industrial"
              className="rounded-xl shadow-2xl transition-transform duration-300 hover:scale-105"
              width={500}
              height={500}
            />
          </div>
          <div className="flex flex-col justify-center space-y-6 text-center md:text-left">
            <div>
              <h2 className="mb-3 text-2xl font-bold uppercase text-blue-600">
                O que é #FIRSTLikeAGirl?
              </h2>
              <p className="text-lg font-medium text-gray-700">
                Um movimento nas redes sociais para encorajar meninas e mulheres
                em STEM e FIRST. Ao apresentar as muitas mulheres incríveis da
                FIRST e suas histórias, as meninas podem encontrar modelos com
                quem se identificam e que as inspiram.
              </p>
            </div>
            <div>
              <h2 className="mb-3 text-2xl font-bold uppercase text-blue-600">
                Por que isso é importante?
              </h2>
              <p className="text-lg font-medium text-gray-700">
                Por meio dessa campanha nas redes sociais, capacitamos meninas
                com a confiança necessária para superar pressões culturais,
                seguir seus sonhos no STEM e se tornarem membros ativas da
                comunidade FIRST.
              </p>
            </div>
          </div>
          {/* Second Row */}
          <div className="flex flex-col justify-center space-y-6 text-center md:order-last md:text-left">
            <div>
              <h2 className="mb-3 text-2xl font-bold uppercase text-blue-600">
                Nosso Time
              </h2>
              <p className="text-lg font-medium text-gray-700">
                O Megazord 7563 é uma equipe de robótica brasileira, mais
                especificamente de Jundiaí, São Paulo, que participa da FRC.
                Conhecida por sua paixão pela inovação e pela colaboração, a
                equipe tem se destacado nas competições, mostrando um
                crescimento constante desde sua estreia em 2019.
              </p>
            </div>
            <div>
              <h2 className="mb-3 text-2xl font-bold uppercase text-blue-600">
                UniAnchieta
              </h2>
              <p className="text-lg font-medium text-gray-700">
                Os alunos da UniAnchieta teve o papel fundamental de ajudar com a criação
                e desenvolvimento desse site, fazendo a divulgação e trabalho necessário
                para se tornar ainda mais forte o nosso propósito.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center md:order-first">
            <Image
              src="/photo4.png"
              alt="Grupo de mulheres reunidas sobre mulheres no meio industrial"
              width={500}
              height={500}
              className="rounded-xl shadow-2xl transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
