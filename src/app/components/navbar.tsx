import Image from "next/image" 
import logo from "../../../public/logo.png"
 
 export default function Navbar() {
  return (
    <div>
      <div className="flex flex-col bg-pink-500 w-full h-full justify-center items-center gap-4">
        <Image src={logo} alt="Logo First" className="mt-2"/>
        <div>
          <ul className="flex gap-4 text-white text-center mb-2 font-bold flex-wrap justify-center ">
            <li>Home</li>
            <li>Nossa História</li>
            <li>Embaixadores</li>
            <li>Redes Sociais</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
