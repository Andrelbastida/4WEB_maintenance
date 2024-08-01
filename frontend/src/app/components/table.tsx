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
            <div className="overflow-x-auto max-h-64">
                <table className="w-full data-table"> 
                    <thead className="bg-gray-50 sticky top-0">
                        <tr>
                            <th>Ambiente</th>
                            <th>Equipamentos</th>
                            <th>Solicitação</th>
                            <th>Atendimento</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y max-h-64 overflow-y-auto">
                        {listaTabela.map((obj, index) => (
                            <tr key={index}>
                                <td >{obj.Ambiente}</td>
                                <td >{obj.Equipamento}</td>
                                <td >{obj.Solicitação}</td>
                                <td >{obj.Atendimento}</td>
                                <td className="flex flex-1">{obj.icone1}{obj.icone2}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
    
    
    
}