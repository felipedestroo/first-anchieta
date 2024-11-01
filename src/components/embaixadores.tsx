export default function Embaixadores() {
    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-row justify-center w-full max-w-5xl p-6">
                {/* Seção de Embaixadores */}
                <div className="w-full max-w-2xl p-6">
                    <div className="flex flex-col justify-center rounded-md mt-8 mb-0">
                        <h1 className="text-blue-500 font-bold uppercase text-3xl mb-4 text-center">
                            Embaixadores
                        </h1>
                        <p className="font-semibold text-justify mb-4 italic">
                            Desde 2016, as equipes da <span className="italic">FIRST LEGO League</span>, <span className="italic">FIRST Tech Challenge</span> e 
                            <span className="italic"> FIRST Robotics Competition</span> em toda a comunidade global da <span className="italic">FIRST</span> têm abraçado 
                            nosso programa <span className="text-blue-500">#FIRSTLikeAGirl</span>!
                        </p>
                        <p className="text-justify mb-4">
                            Ao longo dos anos, e mesmo durante a pandemia, muitas equipes entraram em contato 
                            com a equipe fundadora, Exploding Bacon 1902, perguntando como poderiam contribuir 
                            mais para fortalecer o movimento <span className="text-blue-500">#FIRSTLikeAGirl</span>. Esse entusiasmo nos inspirou a 
                            criar o Programa de Embaixadores <span className="text-blue-500">#FIRSTLikeAGirl</span>.
                        </p>
                        <p className="text-justify mb-4">
                            Desde 2018, os embaixadores estão tornando esta campanha sua, compartilhando suas histórias e criando botões e 
                            placas para suas regiões e competições, mudando assim a cultura em seus próprios países. À medida que todos nos 
                            esforçamos para construir relacionamentos mais fortes, desenvolvemos uma comunidade <span className="italic">FIRST</span> mais unida, 
                            composta por equipes sustentáveis que se apoiam mutuamente.
                        </p>
                    </div>
                </div>

                {/* Seção de Embaixadores Recentes ao lado da seção principal */}
                <div className="w-full max-w-md p-6">
                    <div className="flex flex-col justify-center rounded-md mt-8">
                        <h2 className="text-blue-500 font-bold uppercase mt-8 text-2xl text-center">
                            Embaixadores Recentes #FIRSTLikeAGirl
                        </h2>
                        <div className="overflow-x-auto mt-4">
                            <table className="table-auto border-collapse border border-gray-300 w-full">
                                <thead>
                                    <tr className="bg-gray-200">
                                        <th className="border border-gray-300 p-2">2023-24</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td className="border border-gray-300 p-2">FTC 7593 NDB TigerBots, California USA</td></tr>
                                    <tr><td className="border border-gray-300 p-2">FRC 1902 Exploding Bacon, Florida USA</td></tr>
                                    <tr><td className="border border-gray-300 p-2">FRC 5993 Istech Robotic Society, Turkey</td></tr>
                                    <tr><td className="border border-gray-300 p-2">FRC 4188 Columbus Space Program, Georgia, USA</td></tr>
                                    <tr><td className="border border-gray-300 p-2">FRC 2212 The Spikes, Israel</td></tr>
                                    <tr><td className="border border-gray-300 p-2">FRC 1622 Team Spyder and PHS SWENext Chapter, South California, USA</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {/* Seção dos embaixadores #FIRSTLikeAGirl */}
            <div className="w-full max-w-5xl mt-4 p-6">
                <h1 className="text-blue-500 font-bold uppercase text-2xl text-left">
                    Embaixadores #FIRSTLikeAGirl:
                </h1>
                <ul className="text-left mt-4 ml-4 list-disc">
                    <li>Compreendem a progressão dos programas da FIRST</li>
                    <li>Possuem conhecimento tanto das áreas de robótica quanto de negócios de suas equipes</li>
                    <li>São apaixonados por compartilhar suas histórias e incentivar meninas na área de STEM</li>
                </ul>

                {/* Nova seção: Na comunidade, os Embaixadores podem */}
                <h1 className="text-blue-500 font-bold uppercase mt-4 text-2xl text-left">
                    Na comunidade, os Embaixadores podem:
                </h1>
                <ul className="text-left mt-4 ml-4 list-disc">
                    <li>Trabalhar diretamente com competições para promover o #FIRSTLikeAGirl</li>
                    <li>Baixar modelos de placas e botões e criar os seus próprios para compartilhar em seus eventos</li>
                    <li>Contatar parceiros regionais do FLL Jr. e FLL locais para ajudar em eventos na área</li>
                    <li>Participar de competições FLL e FLL Jr. com seus robôs</li>
                    <li>Conversar com meninas sobre as equipes FTC e FRC em suas regiões e as oportunidades para que continuem na FIRST</li>
                    <li>Visitar equipes ou criar oportunidades #FIRSTLikeAGirl para conectar meninas da FIRST em sua área por meio de encontros sociais</li>
                    <li>Adicionar uma página de divulgação #FIRSTLikeAGirl ao seu site</li>
                </ul>
            </div>
        </div>
    );
}
