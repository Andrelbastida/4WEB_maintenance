import Image from "next/image";
import { IoMdPerson } from "react-icons/io";
import { IoSettingsSharp, IoSwapHorizontalSharp } from "react-icons/io5";
import { LuForklift } from "react-icons/lu";
import { MdDashboard } from "react-icons/md";

export default function Home() {
  return (
  
  <div className="h-screen flex flex-col">
    <div className="flex-1 flex">
      <aside className="w-64 p-6 bg-white/30">
        <Image src={"/image/logo"} className="w-full"
        alt="Logo" width={300} height={300}/>
        
        <nav className="space-y-4 flex flex-col mt-8">
          <a href="" className="flex items-center gap-2 hover:font-semibold hover:text-blue-400">
            <MdDashboard/>
            Dashboard
          </a>

          <a href=""className="flex items-center gap-2 hover:font-semibold hover:text-blue-400">
          <IoSwapHorizontalSharp/>
            Ambientes
          </a>

          <a href=""className="flex items-center gap-2 hover:font-semibold hover:text-blue-400">
          <LuForklift/>
            Equipamentos
          </a>

          <a href=""className="flex items-center gap-2 hover:font-semibold hover:text-blue-400">
          <IoSettingsSharp/>
            Manutenções
          </a>

          <a href=""className="flex items-center gap-2 hover:font-semibold hover:text-blue-400">
          <IoMdPerson/>
            Usuário
          </a>


        </nav>
      </aside>
      
      <main className="flex-1 flex-col flex text-black" >
        <h1 className="text-4xl font-bold uppercase w-full bg-white/40 p-6 text-center">Sistema de Gestão de Manutenção</h1>

        <div>
          <div className="grid grid-cols-4 gap-4 p-6">
            <div className="bg-orange-200 p-6 flex gap-2 rounded-xl">
              <div className="flex flex-col flex-1">
                <strong className="text-3xl font-semibold">200</strong>
                <span className="text-sm">Ambientes</span>
              </div>
              <IoSwapHorizontalSharp size={48}/>
            </div>
            <div className="bg-blue-200 p-6 flex gap-2 rounded-xl">
              <div className="flex flex-col flex-1">
                <strong className="text-3xl font-semibold">200</strong>
                <span className="text-sm">Ambientes</span>
              </div>
              <LuForklift size={48}/>
            </div>
            <div className="bg-red-200 p-6 flex gap-2 rounded-xl">
              <div className="flex flex-col flex-1">
                <strong className="text-3xl font-semibold">200</strong>
                <span className="text-sm">Ambientes</span>
              </div>
              <IoSwapHorizontalSharp size={48}/>
            </div>
            <div className="bg-yellow-200 p-6 flex gap-2 rounded-xl">
              <div className="flex flex-col flex-1">
                <strong className="text-3xl font-semibold">200</strong>
                <span className="text-sm">Ambientes</span>
              </div>
              <IoSwapHorizontalSharp size={48}/>
            </div>
          </div>
        </div>

      </main>
    </div>
    <footer className="p-6 bg-white text-center text-red-900 text-sm">
      Todos os direitos reservados &copy; 2024
    </footer>
  </div>
);
}
