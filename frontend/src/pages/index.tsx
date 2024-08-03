import { Grafico } from "@/app/components/graphics";
import "../app/globals.css";
import { Tabela } from "@/app/components/table";
import { Footer } from "@/app/components/footer";
import { Card } from "@/app/components/card";
import { Aside } from "@/app/components/aside";
import { FaBuilding } from "react-icons/fa";
import { BotaoBtn } from "@/app/components/botao";
import { Table } from "@tremor/react";
import colors from "tailwindcss/colors";
import { TesteTabela } from "@/app/components/testeTabela";
// Pagina de Manutenções

export default function Index() {
  const botoes = [
    {
      color: "white",
      text: "Cadastrar Manutenção",
    },
  ];

  const titulo = ["Maquina", "Local" , "Encarregado", "Status" , "Relatório", "Ações"];
  const conteudo = [
    ["Multilazer","Setor A C3", "Setor A", "Em Andamento", "Pdf", "Icones"],
   
  ];

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 flex">
        <Aside />

        <main className="flex-1 flex-col flex text-black max-h-svh">
          <h1 className="text-2xl font-bold uppercase w-full bg-white/80 p-3 text-center">
            Manutenções
          </h1>
          <div className="paginaMaintenance-data">
            {/* Conteudo do site abaixo */}
            {botoes.map((props) => (
              <BotaoBtn color={props.color} text={props.text} />
            ))}
            {botoes.map((props) => (
              <BotaoBtn color={props.color} text={props.text} />
            ))}
          </div>
          <TesteTabela titulos={titulo}  campos={conteudo}/>
          
        </main>
      </div>
    </div>
  );
}
