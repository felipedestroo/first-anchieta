import Image from "next/image"
import photo1 from "../../public/photo1.png"
import photo4 from "../../public/photo4.png"


export default function Home() {
  return (
    <div>
        <div>
            <div className="flex justify-center xl:flex-row mt-16 mb-16 flex-wrap">
                <Image 
                    src={photo1} 
                    alt="grupo de mulheres reunidas sobre mulheres no meio industrial"
                    className="rounded-xl xl:w-1/4 w-1/2 drop-shadow-2xl xl:mr-36 border-white"
                />
                <div className="flex flex-col text-center justify-center rounded-md mt-8 xl:mr-20">
                    <h1 className="text-blue-500 font-bold text-transform: uppercase">
                        O que é #FIRSTLikeAGirl?
                    </h1>
                    <p className="font-semibold flex-wrap text-center xl:text-justify mt-2">
                        Um movimento nas redes sociais para encorajar meninas e mulheres em STEM e FIRST. <br />
                        Ao apresentar as muitas mulheres incríveis da FIRST e suas histórias, as meninas podem <br />
                        encontrar modelos com quem se identificam e que as inspiram. 
                    </p>
                    <h1 className="text-blue-500 font-bold text-transform: uppercase mt-8">
                        Por que isso é importante?
                    </h1>
                    <p className="font-semibold text-base flex-wrap w-auto text-center xl:text-justify mt-2">
                        Por meio dessa campanha nas redes sociais, capacitamos meninas com a confiança necessária <br />
                        para superar pressões culturais, seguir seus sonhos no STEM e se <br />
                        tornarem membros ativas da comunidade FIRST. 
                    </p>
                </div>
                <div className="flex justify-center xl:flex-row-reverse mt-16 flex-wrap">
                    <Image 
                        src={photo4} 
                        alt="grupo de mulheres reunidas sobre mulheres no meio industrial"
                        className="rounded-xl xl:w-1/4 w-1/2 drop-shadow-2xl xl:ml-36 border-white"
                    />
                    <div className="flex justify-between mt-8 h-auto">
                        <div className="flex flex-col text-center justify-center rounded-md">
                            <h1 className="text-blue-500 font-bold text-transform: uppercase">
                                Nosso Time
                            </h1>
                            <p className="font-semibold text-base flex-wrap w-auto text-center xl:text-justify mt-2">
                                O Megazord 7563 é uma equipe de robótica brasileira, mais especificamente de Jundiaí, São Paulo,<br />
                                que participa da FRC. Conhecida por sua paixão pela inovação e pela colaboração, a equipe tem se destacado nas<br />
                                competições, mostrando um crescimento constante desde sua estreia em 2019.
                            </p>
                            <h1 className="text-blue-500 font-bold text-transform: uppercase mt-8">
                                Por que isso é importante?
                            </h1>
                            <p className="font-semibold text-base flex-wrap w-auto text-center xl:text-justify mt-2">
                                Por meio dessa campanha nas redes sociais, capacitamos meninas com a confiança necessária <br />
                                para superar pressões culturais, seguir seus sonhos no STEM e se <br />
                                tornarem membros ativas da comunidade FIRST. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
