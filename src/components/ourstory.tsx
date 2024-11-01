import Image from "next/image"

export default function Ourstory() {
  return (
    <div className="flex justify-center content-center mt-16 flex-col">
      <h1 className="text-blue-500 font-bold text-transform: uppercase text-2xl text-center mb-16">Nossa História</h1>

      <div className="w-full flex gap-8 justify-around items-center">
        <div className="flex-col flex gap-8">
          <div className="ml-16">
            <h1 className="text-blue-500 font-bold text-transform: uppercase">A Missão do #FIRSTLikeAGirl</h1>
            <p className="font-semibold flex-wrap text-center xl:text-justify mt-2">
              O #FIRSTLikeAGirl se esforça para melhorar a cultura de STEM ao compartilhar as experiências das mulheres e meninas <br />
              bem-sucedidas na FIRST. Ao destacar as incríveis mulheres da FIRST e suas histórias, as meninas podem encontrar modelos <br />
              com os quais se identificam e se inspiram. Por meio desta campanha nas redes sociais, empoderamos as meninas com confiança <br />
              para superar as pressões culturais, seguir seus sonhos em STEM e se tornarem membros ativos da comunidade FIRST. Melhoramo <br />
              a cultura de STEM ao fornecer modelos que inspiram meninas a se tornarem a próxima geração de líderes em ciência e tecnolo <br />
              <br />
              Nossa missão é incentivar meninas e mulheres em todos os lugares a perceberem suas oportunidades, a participarem ativamente e <br />
              prosperarem na comunidade FIRST e a retribuírem o incentivo que encontramos umas nas outras.
            </p>
          </div>
          <div className="ml-16">
            <h1 className="text-blue-500 font-bold text-transform: uppercase">Por que achamos que o #FIRSTLikeAGirl é importante</h1>
            <p className="font-semibold flex-wrap text-center xl:text-justify mt-2 text-wrap max-w-4xl">
              Começamos esse movimento porque percebemos que ainda há uma falta de participação e engajamento feminino tanto na comunidade FIRST
              quanto no mundo de STEM. Diversos estudos mostram que as meninas adoram STEM até por volta dos 11 anos de idade, quando começam a perder confiança.
              <br /><br />
              Pesquisadores sugerem várias abordagens possíveis para reduzir a lacuna de gênero em STEM, incluindo exposição a oportunidades 
              práticas de aprendizado e a promoção de modelos femininos de referência. De acordo com um artigo recente do The Society Pages, 
              “a ciência social mostra que modelos positivos são, de fato, um forte indicador de interesse e sucesso em STEM para mulheres.”
              <br /><br />
              O FIRST possui uma abundância de garotas entusiasmadas, motivadas, generosas e incríveis, e contar suas histórias permite que mais
              meninas encontrem modelos de inspiração. Ver as histórias de mulheres envolvidas com o FIRST localmente nos deixou querendo mais, 
              e assim nasceu o #FIRSTLikeAGirl. Um dos impactos mais surpreendentes e incríveis do #FIRSTLikeAGirl foi o efeito que teve nos meninos 
              da nossa equipe. A campanha nos ajudou a enxergar como podemos criar uma cultura mais inclusiva em nossa equipe, e esperamos que tenha
              o mesmo impacto na sua.
            </p>
          </div>
          <div className="ml-16">
            <h1 className="text-blue-500 font-bold text-transform: uppercase">O crescimento do #FIRSTLikeAGirl</h1>
            <p className="font-semibold flex-wrap text-center xl:text-justify mt-2 text-wrap max-w-4xl">
              A ideia de um programa totalmente inclusivo começou no outono de 2014, mas ganhou vida à medida que nossa equipe continuava a crescer e um 
              mentor de vídeo idealizou uma direção para a iniciativa. Em nosso espaço de construção, na primavera de 2016, começamos a filmar algumas das
              histórias de nossas integrantes para compartilhar suas experiências com o mundo.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <Image 
            src="/photo5.png"
            alt="Foto da gurizada"
            width={300}
            height={300}
            className="rounded-lg shadow-sm"
          />
          <Image 
            src="/photo6.png"
            alt="Foto da gurizada"
            width={300}
            height={300}
            className="rounded-lg shadow-sm"
          />
          <Image 
            src="/photo7.png"
            alt="Foto da gurizada"
            width={300}
            height={300}
            className="rounded-lg shadow-sm"
          />
        </div>
      </div>
    </div>
  )
}

