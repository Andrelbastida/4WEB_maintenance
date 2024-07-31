import { Footer } from "./components/footer";
import { Aside } from "./components/aside";
import { Card } from "./components/card";
import { FaBuilding } from "react-icons/fa";
import { Tabela } from "./components/table";

export default function Home() {
  const cards= [
    {color: "bg-orange-200", qty:"100", text:"Ambientes", icon:<FaBuilding size={48}/>},
    {color: "bg-blue-200", qty:"100", text:"Ambientes", icon:<FaBuilding size={48}/>},
    {color: "bg-red-200", qty:"100", text:"Ambientes", icon:<FaBuilding size={48}/>},
    {color: "bg-yellow-200", qty:"100", text:"Ambientes", icon:<FaBuilding size={48}/>},
    
  ]
  return (
  
  <div className="h-screen flex flex-col">
    <div className="flex-1 flex">
      <Aside/>
      
      <main className="flex-1 flex-col flex text-black" >
        <h1 className="text-4xl font-bold uppercase w-full bg-white/40 p-6 text-center">Sistema de Gestão de Manutenção</h1>

        <div>
          <div className="grid grid-cols-4 gap-4 p-6">
            {cards.map((props) => (
              <Card
                color={props.color}
                qty={props.qty}
                text={props.text}
                icon={props.icon}
              />
            ))}
          
          </div>
        </div>
        <Tabela/>
      </main>
      
    </div>
    <Footer/>
    
  </div>
);
}
