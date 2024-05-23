import React, { useEffect, useState } from 'react';
import NavLink from '@/Components/NavLink';
import RedButon from './RedButon';
import { findRole, permissionInRole, switAlerdelete, switAlert } from '@/functions/functions'

const DataTable = ({
    auth, columns, data, infodata, pageSize, setpageSize,
    currentPage, colspan,
    ver, rutaver, permisoVer, editar, rutaeditar, permisoEditar, eliminar, rutaeliminar, permisoEliminar,
    primaryName, secondaryName }) => {
    // console.log(auth);
    const [filterInput, setFilterInput] = useState('');
    const [filteredData, setFilteredData] = useState(data);
    // console.log(filteredData);


    // setTimeout(() => {
    //     setFilteredData(data);
    // },100)
    const handleSearch = (e) => {
        const value = e.target.value || '';
        setFilterInput(value);

        setTimeout(() => {
            if (value === '') {
                setFilteredData(data);
            }
        }, 50);

        const filtered = infodata.filter((row) => {
            return Object.values(row).some((cell) =>
                String(cell).toLowerCase().includes(value.toLowerCase())
            );
        });

        setFilteredData(filtered);
    };

    useEffect(() => {
        const search = document.getElementById('search');
        // console.log(search.value);
        if (search.value === '') {
            setFilteredData(data);
        }
    });
    const pageCount = Math.ceil(infodata.length / pageSize);
    return (
        <div>
            <div className="flex justify-between items-center">
                <div className="flex items-center"> {/* Envuelve el campo select y el texto "Registros por página" */}
                    <select
                        name=""
                        onChange={(e) => setpageSize(e.target.value)}
                        className="select_table rounded-lg overflow-hidden mr-2" // Añade margen a la derecha para separar el campo select del texto
                        id=""
                    >

                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                    <span>Registros por página </span> {/* Texto "Registros por página" */}
                </div>

                <input
                    id='search'
                    type="text"
                    value={filterInput}
                    onChange={handleSearch}
                    placeholder="Buscar..."
                    className='rounded-lg overflow-hidden bg-gray-700 text-white'
                />

            </div>
            <table className="w-full text-sm text-left rtl:text-right  text-gray-400 rounded-lg overflow-hidden">
                <thead className="text-xs  uppercase  bg-gray-700 text-gray-400">
                    <tr className="px-6 py-3">
                        {columns.map((column) => (
                            <th colSpan={colspan} scope="col" className="px-6 py-3 text-white" key={column.Header}>{column.Header} {secondaryName} </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((row, rowIndex) => (
                        <tr key={rowIndex} className={` border-b  ${rowIndex % 2 === 0 ? 'bg-gray-800' : 'bg-gray-700'}  border-gray-700`}>
                            {columns.map((column, colIndex) => (
                                <td key={colIndex} className="px-6 py-4 font-medium  whitespace-nowrap text-white">{row[column.accessor]}</td>
                            ))}
                            {ver && (

                                <td>
                                    
                                        <NavLink
                                            className='inline-flex items-center  bg-blue-600 border border-transparent rounded-md font-semibold navbarlink-text text-white uppercase tracking-widest hover:bg-blue-400  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150'
                                            href={route(rutaver, { id: row.id })} 
                                            >
                                            Ver
                                        </NavLink>
                                   
                                </td>
                            )}
                            {editar && (
                                <td>
                                 
                                        <NavLink
                                            className='inline-flex items-center  bg-green-600 border border-transparent rounded-md font-semibold navbarlink-text text-white uppercase tracking-widest hover:bg-green-400  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150'
                                            href={route(rutaeditar, { id: row.id })} 
                                            >
                                            Editar
                                        </NavLink>
                                    
                                </td>
                            )}
                            {eliminar && (
                                <td>
                                   
                                        <RedButon
                                            onClick={() => { switAlerdelete(`Estas seguro de eliminar  ${primaryName} ${row.name} ${row.last_name? row.last_name : ''}`, rutaeliminar, row.id, `el ${primaryName} ${row.name} ${row.last_name} ha sido eliminado`, `se ha cancelado la eliminación del ${primaryName} ${row.name} ${row.last_name? row.last_name : ''}`) }}
                                        >Eliminar</RedButon>
                                    
                                </td>
                            )}

                        </tr>
                    ))}
                </tbody>
            </table>
            <span>
                Página{' '}
                <strong>
                    {currentPage} de {pageCount}
                    <br /> Total  {infodata.length} Registros
                </strong>{' '}
            </span>
        </div>
    );
};

export default DataTable;
