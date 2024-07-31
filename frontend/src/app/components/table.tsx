import { FaBuilding } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";
import { LuEraser } from "react-icons/lu";


export function Tabela(){
    const listaTabela= [
        {Ambiente:"Teste de Ambiente", Equipamento:"Teste", Solicitação:"testeSolicitação", Atendimento:"atend", icone1:<FiEdit2 />, icone2:<LuEraser /> },
        {Ambiente:"Teste de Ambiente", Equipamento:"Teste", Solicitação:"testeSolicitação", Atendimento:"atend", icone1:<FiEdit2 />, icone2:<LuEraser /> },
        {Ambiente:"Teste de Ambiente", Equipamento:"Teste", Solicitação:"testeSolicitação", Atendimento:"atend", icone1:<FiEdit2 />, icone2:<LuEraser /> },
        {Ambiente:"Teste de Ambiente", Equipamento:"Teste", Solicitação:"testeSolicitação", Atendimento:"atend", icone1:<FiEdit2 />, icone2:<LuEraser /> },
        {Ambiente:"Teste de Ambiente", Equipamento:"Teste", Solicitação:"testeSolicitação", Atendimento:"atend", icone1:<FiEdit2 />, icone2:<LuEraser /> },
        {Ambiente:"Teste de Ambiente", Equipamento:"Teste", Solicitação:"testeSolicitação", Atendimento:"atend", icone1:<FiEdit2 />, icone2:<LuEraser /> },
        {Ambiente:"Teste de Ambiente", Equipamento:"Teste", Solicitação:"testeSolicitação", Atendimento:"atend", icone1:<FiEdit2 />, icone2:<LuEraser /> },
        {Ambiente:"Teste de Ambiente", Equipamento:"Teste", Solicitação:"testeSolicitação", Atendimento:"atend", icone1:<FiEdit2 />, icone2:<LuEraser /> },
        {Ambiente:"Teste de Ambiente", Equipamento:"Teste", Solicitação:"testeSolicitação", Atendimento:"atend", icone1:<FiEdit2 />, icone2:<LuEraser /> },
        {Ambiente:"Teste de Ambiente", Equipamento:"Teste", Solicitação:"testeSolicitação", Atendimento:"atend", icone1:<FiEdit2 />, icone2:<LuEraser /> },
        {Ambiente:"Teste de Ambiente", Equipamento:"Teste", Solicitação:"testeSolicitação", Atendimento:"atend", icone1:<FiEdit2 />, icone2:<LuEraser /> },
        {Ambiente:"Teste de Ambiente", Equipamento:"Teste", Solicitação:"testeSolicitação", Atendimento:"atend", icone1:<FiEdit2 />, icone2:<LuEraser /> },
        {Ambiente:"Teste de Ambiente", Equipamento:"Teste", Solicitação:"testeSolicitação", Atendimento:"atend", icone1:<FiEdit2 />, icone2:<LuEraser /> },
        {Ambiente:"Teste de Ambiente", Equipamento:"Teste", Solicitação:"testeSolicitação", Atendimento:"atend", icone1:<FiEdit2 />, icone2:<LuEraser /> },
        {Ambiente:"Teste de Ambiente", Equipamento:"Teste", Solicitação:"testeSolicitação", Atendimento:"atend", icone1:<FiEdit2 />, icone2:<LuEraser /> },
    ]
    return (
        <div className="p-6">
            <div className="overflow-x-auto overflow-y-auto max-h-96">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ambiente</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Equipamentos</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Solicitação</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Atendimento</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {listaTabela.map((obj, index) => (
                            <tr key={index}>
                                <td className="px-6 py-2 whitespace-nowrap">{obj.Ambiente}</td>
                                <td className="px-6 py-2 whitespace-nowrap">{obj.Equipamento}</td>
                                <td className="px-6 py-2 whitespace-nowrap">{obj.Solicitação}</td>
                                <td className="px-6 py-2 whitespace-nowrap">{obj.Atendimento}</td>
                                <td className="px-6 py-2 whitespace-nowrap flex flex-1">{obj.icone1}{obj.icone2}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
    
    
}