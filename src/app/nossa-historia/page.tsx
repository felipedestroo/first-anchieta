import Image from "next/image";

export default function OurStory() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-100 to-blue-200 px-4 py-16">
      <div className="container mx-auto max-w-7xl">
        <h1 className="mb-16 text-center text-3xl font-bold uppercase text-blue-600 md:text-4xl">
          Nossa História
        </h1>

        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
          <div className="flex flex-col gap-12 lg:w-2/3">
            <section>
              <h2 className="mb-4 text-2xl font-bold uppercase text-blue-600">
                A Missão do #FIRSTLikeAGirl
              </h2>
              <p className="text-lg font-medium text-gray-700">
                O #FIRSTLikeAGirl se esforça para melhorar a cultura de STEM ao
                compartilhar as experiências das mulheres e meninas
                bem-sucedidas na FIRST. Ao destacar as incríveis mulheres da
                FIRST e suas histórias, as meninas podem encontrar modelos com
                os quais se identificam e se inspiram. Por meio desta campanha
                nas redes sociais, empoderamos as meninas com confiança para
                superar as pressões culturais, seguir seus sonhos em STEM e se
                tornarem membros ativos da comunidade FIRST. Melhoramos a
                cultura de STEM ao fornecer modelos que inspiram meninas a se
                tornarem a próxima geração de líderes em ciência e tecnologia.
              </p>
              <p className="mt-4 text-lg font-medium text-gray-700">
                Nossa missão é incentivar meninas e mulheres em todos os lugares
                a perceberem suas oportunidades, a participarem ativamente e
                prosperarem na comunidade FIRST e a retribuírem o incentivo que
                encontramos umas nas outras.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold uppercase text-blue-600">
                Por que achamos que o #FIRSTLikeAGirl é importante
              </h2>
              <p className="text-lg font-medium text-gray-700">
                Começamos esse movimento porque percebemos que ainda há uma
                falta de participação e engajamento feminino tanto na comunidade
                FIRST quanto no mundo de STEM. Diversos estudos mostram que as
                meninas adoram STEM até por volta dos 11 anos de idade, quando
                começam a perder confiança.
              </p>
              <p className="mt-4 text-lg font-medium text-gray-700">
                Pesquisadores sugerem várias abordagens possíveis para reduzir a
                lacuna de gênero em STEM, incluindo exposição a oportunidades
                práticas de aprendizado e a promoção de modelos femininos de
                referência. De acordo com um artigo recente do The Society
                Pages, &quot;a ciência social mostra que modelos positivos são,
                de fato, um forte indicador de interesse e sucesso em STEM para
                mulheres.&quot;
              </p>
              <p className="mt-4 text-lg font-medium text-gray-700">
                O FIRST possui uma abundância de garotas entusiasmadas,
                motivadas, generosas e incríveis, e contar suas histórias
                permite que mais meninas encontrem modelos de inspiração. Ver as
                histórias de mulheres envolvidas com o FIRST localmente nos
                deixou querendo mais, e assim nasceu o #FIRSTLikeAGirl. Um dos
                impactos mais surpreendentes e incríveis do #FIRSTLikeAGirl foi
                o efeito que teve nos meninos da nossa equipe. A campanha nos
                ajudou a enxergar como podemos criar uma cultura mais inclusiva
                em nossa equipe, e esperamos que tenha o mesmo impacto na sua.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold uppercase text-blue-600">
                O crescimento do #FIRSTLikeAGirl
              </h2>
              <p className="text-lg font-medium text-gray-700">
                A ideia de um programa totalmente inclusivo começou no outono de
                2014, mas ganhou vida à medida que nossa equipe continuava a
                crescer e um mentor de vídeo idealizou uma direção para a
                iniciativa. Em nosso espaço de construção, na primavera de 2016,
                começamos a filmar algumas das histórias de nossas integrantes
                para compartilhar suas experiências com o mundo.
              </p>
            </section>
          </div>

          <div className="flex flex-col gap-8 lg:w-1/3">
            <Image
              src="/photo5.png"
              alt="Foto da gurizada"
              width={400}
              height={400}
              className="rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
            />
            <Image
              src="/photo6.png"
              alt="Foto da gurizada"
              width={400}
              height={400}
              className="rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
            />
            <Image
              src="/photo7.png"
              alt="Foto da gurizada"
              width={400}
              height={400}
              className="rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
