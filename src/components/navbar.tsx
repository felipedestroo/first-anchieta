import Image from "next/image" 
import logo from "../../public/logo.png"
 
type NavBarItemsProps = {
  title: string
  url: string
}

function NavBarItems(props: NavBarItemsProps) {
  const {title, url} = props
  return <li className="border-y border-transparent hover:border-b-white">
    <a href={url}>{title}</a>
  </li>
}

 export default function Navbar() {
  return (
    <div>
      <div className="flex flex-col bg-blue-500 w-full h-full justify-center items-center gap-4">
        <Image src={logo} alt="Logo First" className="mt-2"/>
        <div>
          <ul className="flex gap-4 text-white text-center mb-2 font-bold flex-wrap justify-center">
            <NavBarItems title={"Home"} url={"/"}/>
            <NavBarItems title={"Nossa História"} url={"/section2"}/>
            <NavBarItems title={"Embaixadores"} url={"/section3"}/>
            <NavBarItems title={"Redes Sociais"} url={"/section4"}/>
          </ul>
        </div>
      </div>
    </div>
  )
}
