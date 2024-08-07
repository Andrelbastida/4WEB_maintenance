import { Grafico } from '@/app/components/graphics';
import '../app/globals.css';
import { Tabela } from '@/app/components/table';
import { Footer } from '@/app/components/footer';
import { Card } from '@/app/components/card';
import { Aside } from '@/app/components/aside';
import { FaBuilding } from 'react-icons/fa';
import { BotaoBtn } from '@/app/components/botaoBtn';
import { IoCloudUpload } from 'react-icons/io5';
// Pagina de Cadastro de Equipamentos

export default function CadastroEquipamento(){
    const formulario = [
        {titulo:"Nome do Equipamento/Ferramenta"},
        {titulo:"Descrição"},
        {titulo:"Número de Série/Serial"},
        {titulo:"Marca/Modelo"},
        {titulo:"Fabricante"},
        {titulo:"Data de Aquisição"},
        {titulo:"Data de Fabricação"},
        {titulo:"Localização"},
        {titulo:"Condição"},
        {titulo:"Valor de Aquisição"},
        {titulo:"Vida Útil Estimada"},
        {titulo:"Outros"},
        ];
  const botoes = [
    {
      color: "white",
      text: <div className="flex flex-1 gap-2"> <h4>Upload</h4> <IoCloudUpload /></div>,
    },
    {
      color: "white",
      text: "Enviar",
    },
    
  ];
  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 flex">
        <Aside/>

        <main className="flex-1 flex-col flex text-black max-h-svh">
          <h1 className="text-2xl font-bold uppercase w-full bg-white/80 p-3 text-center">
            Cadastro de Equipamentos
          </h1>
          <div className="space-y-2 form-data">

            <h3>Selecione o tipo:</h3>
            <select className='w-40'>
                <option value="ferramenta">Ferramenta</option>
                <option value="epi">EPI</option>
                <option value="equipamento">Equipamento</option>
            </select>
      

          <form  className="space-y-2 form-data">
          {formulario.map((obj, index) => (
                            <div key={index}>
                              <label >{obj.titulo}</label>
                              <input />
                            </div>
                            
                           
                        ))}
           
           <div className="">
              {botoes.map((props) => (
                <BotaoBtn color={props.color} text={props.text} />
              ))}
            </div>
        </form>
          </div>
          
        </main>
      </div>
      
    </div>
  );
}