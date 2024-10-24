import Image from "next/image";
import logoUnianchieta from "../../public/logo_Unianchieta.png";
import logoMegazord from "../../public/megaHelmetWhite.png";

export default function Footer() {
  return (
    <div className="bg-blue-500 text-center py-2">
      <div className="flex justify-center items-center">
        <Image src={logoMegazord} alt="logo da universidade" className="w-16" />
        <p className="text-white mx-6">
          © Grupo 1. Todos os direitos reservados.
        </p>
        <Image
          src={logoUnianchieta}
          alt="logo da universidade"
          className="w-28"
        />
      </div>
    </div>
  );
}
