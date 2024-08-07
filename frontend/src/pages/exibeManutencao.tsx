import { Grafico } from "@/app/components/graphics";
import "../app/globals.css";
import { Tabela } from "@/app/components/table";
import { Footer } from "@/app/components/footer";
import { Card } from "@/app/components/card";
import { Aside } from "@/app/components/aside";
import { BotaoBtn } from "@/app/components/botaoBtn";
import { Icon, Table } from "@tremor/react";
import colors from "tailwindcss/colors";
import { TesteTabela } from "@/app/components/testeTabela";

//Importações de Icones :
import { FiEdit2 } from "react-icons/fi";
import { LuEraser } from "react-icons/lu";
import { FaRegFile } from "react-icons/fa";


// Pagina de exibição - Manutenções

export default function ExibeManutencoes() {
    const incones={
        icon1: <FaRegFile className="icone"/>,
        icon2: <FiEdit2 className="icone"/>, 
        icon3: <LuEraser className="icone"/>
    }
    
  const botoes = [
    {
      color: "white",
      text: "Apenas um botão",
    },
    {
      color: "white",
      text: "Cadastrar Manutenção",
    },
  ];

  const titulo = ["Maquina", "Local" , "Encarregado", "Status" , "Relatório", "Ações"];
  const conteudo = [
    ["Multilazer","Setor A C3", "Setor A", "Em Andamento", <div className="icones-table1">{incones.icon1}</div>, <div className="icones-table">{incones.icon2}{incones.icon3}</div>],
    ["Multilazer","Setor A C3", "Setor A", "Em Andamento", <div className="icones-table1">{incones.icon1}</div>, <div className="icones-table">{incones.icon2}{incones.icon3}</div>],
    ["Multilazer","Setor A C3", "Setor A", "Em Andamento", <div className="icones-table1">{incones.icon1}</div>, <div className="icones-table">{incones.icon2}{incones.icon3}</div>],
    ["Multilazer","Setor A C3", "Setor A", "Em Andamento", <div className="icones-table1">{incones.icon1}</div>, <div className="icones-table">{incones.icon2}{incones.icon3}</div>],
    ["Multilazer","Setor A C3", "Setor A", "Em Andamento", <div className="icones-table1">{incones.icon1}</div>, <div className="icones-table">{incones.icon2}{incones.icon3}</div>],
    ["Multilazer","Setor A C3", "Setor A", "Em Andamento", <div className="icones-table1">{incones.icon1}</div>, <div className="icones-table">{incones.icon2}{incones.icon3}</div>],
    ["Multilazer","Setor A C3", "Setor A", "Em Andamento", <div className="icones-table1">{incones.icon1}</div>, <div className="icones-table">{incones.icon2}{incones.icon3}</div>],


    
  ];

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 flex">
        <Aside />


        {/* Transformar o conteúdo abaixo em uma única página */}


        <main className="flex-1 flex-col flex text-black max-h-svh">
          <h1 className="text-2xl font-bold uppercase w-full bg-white/80 p-3 text-center">
            Manutenções
          </h1>
          
          <div className="flex flex-col ">{/* justify-around */}
            <div className="botoes-data">
              {/* Conteudo do site abaixo */}
              {botoes.map((props) => (
                <BotaoBtn color={props.color} text={props.text} />
              ))}
            </div>
            <TesteTabela titulos={titulo}  campos={conteudo}/>
          </div>
          
          
        </main>
      </div>
    </div>
  );
}
