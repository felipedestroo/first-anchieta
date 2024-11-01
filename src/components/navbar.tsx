import Image from "next/image";
import logo from "../../public/logo.png";

type NavBarItemsProps = {
  title: string;
  url: string;
};

function NavBarItems(props: NavBarItemsProps) {
  const { title, url } = props;
  return (
    <li className="border-y border-transparent hover:border-b-white">
      <a href={url}>{title}</a>
    </li>
  );
}

export default function Navbar() {
  return (
    <div>
      <div className="flex flex-col bg-gradient-to-r from-blue-600 to-blue-800 py-6 shadow-lg w-full h-full justify-center items-center gap-4">
        <Image src={logo} alt="Logo First" className="mt-2" />
        <div>
          <ul className="flex gap-4 text-white text-center mb-2 font-bold flex-wrap justify-center">
            <NavBarItems title={"Início"} url={"/"} />
            <NavBarItems title={"Nossa História"} url={"/nossa-historia"} />
            <NavBarItems title={"Embaixadores"} url={"/embaixadores"} />
            <NavBarItems title={"Redes Sociais"} url={"/redes-sociais"} />
          </ul>
        </div>
      </div>
    </div>
  );
}
