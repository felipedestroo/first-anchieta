import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Embaixadores() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-100 to-blue-200 p-4 sm:p-6 lg:p-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="col-span-full md:col-span-1">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-blue-500 uppercase text-center">
                Embaixadores
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="font-semibold text-justify italic">
                Desde 2016, as equipes da{" "}
                <span className="italic">FIRST LEGO League</span>,{" "}
                <span className="italic">FIRST Tech Challenge</span> e
                <span className="italic"> FIRST Robotics Competition</span> em
                toda a comunidade global da{" "}
                <span className="italic">FIRST</span> têm abraçado nosso
                programa <span className="text-blue-500">#FIRSTLikeAGirl</span>!
              </p>
              <p className="text-justify">
                Desde 2018, os embaixadores estão tornando esta campanha sua,
                compartilhando suas histórias e criando botões e placas para
                suas regiões e competições, mudando assim a cultura em seus
                próprios países. À medida que todos nos esforçamos para
                construir relacionamentos mais fortes, desenvolvemos uma
                comunidade <span className="italic">FIRST</span> mais unida,
                composta por equipes sustentáveis que se apoiam mutuamente.
              </p>
            </CardContent>
          </Card>

          <Card className="col-span-full md:col-span-1">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-blue-500 uppercase text-center">
                Embaixadores
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-center">2016-24</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      FRC 7563 Megazord, Jundiaí BRA
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>FRC 1156 Under Control, Rio Grande do Sul BRA</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      FLL 11128 Haley, Birigui BRA
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      First Lego Girls, BRA
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Ciencia e elas, BRA</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      Steam para meninas, BRA
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-blue-500 uppercase">
                Embaixadores #FIRSTLikeAGirl:
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 space-y-2">
                <li>Compreendem a progressão dos programas da FIRST</li>
                <li>
                  Possuem conhecimento tanto das áreas de robótica quanto de
                  negócios de suas equipes
                </li>
                <li>
                  São apaixonados por compartilhar suas histórias e incentivar
                  meninas na área de STEM
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-blue-500 uppercase">
                Na comunidade, os Embaixadores podem:
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Trabalhar diretamente com competições para promover o
                  #FIRSTLikeAGirl
                </li>
                <li>
                  Baixar modelos de placas e botões e criar os seus próprios
                  para compartilhar em seus eventos
                </li>
                <li>
                  Contatar parceiros regionais do FLL Jr. e FLL locais para
                  ajudar em eventos na área
                </li>
                <li>Participar de competições FLL e FLL Jr. com seus robôs</li>
                <li>
                  Conversar com meninas sobre as equipes FTC e FRC em suas
                  regiões e as oportunidades para que continuem na FIRST
                </li>
                <li>
                  Visitar equipes ou criar oportunidades #FIRSTLikeAGirl para
                  conectar meninas da FIRST em sua área por meio de encontros
                  sociais
                </li>
                <li>
                  Adicionar uma página de divulgação #FIRSTLikeAGirl ao seu site
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
