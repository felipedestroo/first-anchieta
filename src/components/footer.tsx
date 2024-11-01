import Image from "next/image";
import logoUnianchieta from "../../public/logo_Unianchieta.png";
import logoMegazord from "../../public/megaHelmetWhite.png";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-blue-800 py-6 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-8">
          <Image
            src={logoMegazord}
            alt="Logo Megazord"
            className="w-20 transition-transform duration-300 hover:scale-110"
          />
          <p className="text-center text-sm font-medium text-white sm:text-base md:text-lg">
            © {new Date().getFullYear()} Grupo 1. Todos os direitos reservados.
          </p>
          <Image
            src={logoUnianchieta}
            alt="Logo da Universidade"
            className="w-32 transition-transform duration-300 hover:scale-110"
          />
        </div>
      </div>
    </footer>
  );
}
