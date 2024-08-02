import { Grafico } from '@/app/components/graphics';
import '../app/globals.css';
import { Tabela } from '@/app/components/table';
import { Footer } from '@/app/components/footer';
import { Card } from '@/app/components/card';
import { Aside } from '@/app/components/aside';
import { FaBuilding } from 'react-icons/fa';
// Pagina de Maintenance


export function CadastroManutencao(){
  const formulario=[
    {titulo:"Máquina"},
    {titulo:"Serial"},
    {titulo:"Motivo da menutenção"},
    {titulo:"Materiais e peças nescessárias"},
    {titulo:"Setor responsável"},
    {titulo:"Data da manutenção"},
    {titulo:"Localização"},
    {titulo:"Prioridade"},
    {titulo:"Status da Manutenção"},
    {titulo:"Outros"},
    

  ]
  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 flex">
        <Aside/>

        <main className="flex-1 flex-col flex text-black max-h-svh">
          <h1 className="text-2xl font-bold uppercase w-full bg-white/80 p-3 text-center">
            Cadastro de Manutenção
          </h1>
          <div>
          <form  className="space-y-4 form-data">
          {formulario.map((obj, index) => (
                            <div key={index}>
                              <label >{obj.titulo}</label>
                              <input />
                            </div>
                            
                           
                        ))}
           

            <div>
                <button className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:ring focus:ring-opacity-50 focus:ring-indigo-300">Submit</button>
            </div>
        </form>
          </div>
          
        </main>
      </div>
      
    </div>
  );
}