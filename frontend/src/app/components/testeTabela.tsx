import { FiEdit2 } from "react-icons/fi";
import { LuEraser } from "react-icons/lu";

type tabela = {
  titulos: String[];
  campos: String[][];
};

export function TesteTabela({ titulos, campos }: tabela) {
  return (
    <>
      <div className="p-6">
        <div className="overflow-x-auto max-h-64">
          <table className="w-full data-table">
            <thead className="bg-gray-50 sticky top-0">
              <tr>
                {titulos.map((value, index) => (
                  <th key={index}>{value}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {campos.map((obj, index) => (
                <>
                  <tr key={index}>
                    {obj.map((value) => (
                      <>
                        <td>{value}</td>
                      </>
                    ))}
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
