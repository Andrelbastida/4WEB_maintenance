import { Footer } from "../app/components/footer";
import { Aside } from "../app/components/aside";
import { Card } from "../app/components/card";
import { FaBuilding } from "react-icons/fa";
import { Tabela } from "../app/components/table";
import { Grafico } from "../app/components/graphics";
import Layout from '../app/layout';
import '../app/globals.css';


export default function Index() {
  const cards = [
    {
      color: "bg-orange-200",
      qty: "100",
      text: "Ambientes",
      icon: <FaBuilding size={48} />,
    },
    {
      color: "bg-blue-200",
      qty: "100",
      text: "Ambientes",
      icon: <FaBuilding size={48} />,
    },
    {
      color: "bg-red-200",
      qty: "100",
      text: "Ambientes",
      icon: <FaBuilding size={48} />,
    },
    {
      color: "bg-yellow-200",
      qty: "100",
      text: "Ambientes",
      icon: <FaBuilding size={48} />,
    },
  ];
  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 flex">
        <Aside />

        <main className="flex-1 flex-col flex text-black max-h-svh">
          <h1 className="text-2xl font-bold uppercase w-full bg-white/80 p-3 text-center">
            Sistema de Gestão de Manutenção
          </h1>

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
          <div className="flex flex-1">
            <Grafico />
            <Tabela />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
