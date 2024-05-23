import React, { useState } from 'react';
import DataTable from '@/Components/Datatable';
import NavLink from '@/Components/NavLink';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link, Head } from '@inertiajs/react';
// import { findRole, permissionInRole } from '@/functions/functions';



const index = ({ departments, auth }) => {

  const columns = React.useMemo(
    () => [
      {
        Header: 'nombre departamento',
        accessor: 'name',
      },
      
      {
        Header: 'acciones',
        accessor: 'depname',
      },
      
      

    ],
    []
  );

  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setpageSize] = useState(5);

  // console.log(currentPage+1);

  const handlePreviewPage = (departments) => {
    // Actualizar el estado o realizar cualquier otra lógica para mostrar la siguiente página
    setCurrentPage(prevPage => prevPage - 1);
    // console.log(pageSize);
  };
  const handleNextPage = (departments) => {
    // Actualizar el estado o realizar cualquier otra lógica para mostrar la siguiente página
    setCurrentPage(prevPage => prevPage + 1);

  };

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const departmentsToShow = departments.slice(currentPage * pageSize, (currentPage + 1) * pageSize);

  const pageCountNext = Math.ceil(departments.length / pageSize) - 1;
  const pageCountprev = 0// Math.ceil(departments.length /pageSize)-2;
  // console.log(pageCountprev);
  // console.log(currentPage);
  return (<>
<Head title="Departamentos" />
    <AuthenticatedLayout
      user={auth.user}
      
      // auth={auth}
    // header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard_2</h2>}
    >
      <div className='table-pading' >

        <div className="relative overflow-x-auto">

          <DataTable 
          auth={auth} columns={columns} data={departmentsToShow} infodata={departments} pageSize={pageSize} setpageSize={setpageSize} 
          currentPage={currentPage + 1}  colspan={3}
          
          ver={true} 
          rutaver={'departments.show'} 
          permisoVer ={'departments.show'} 
          editar={true} 
          rutaeditar={'departments.edit'} 
          permisoEditar ={'departments.edit'} 
          eliminar={true} 
          rutaeliminar={'departments.destroy'} 
          permisoEliminar ={'departments.destroy'}
          primaryName={'Departamento'} 
          secondaryName ={'Empleados Talento Pro'}
           />
          {/* Agregar controles de paginación */}
          <button disabled={currentPage == pageCountprev} onClick={() => setCurrentPage(0)}
            className='start_end_button inline-flex items-center  bg-blue-600 border border-transparent rounded-md font-semibold navbarlink-text text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150' >
            Inicio
          </button>
          &nbsp;

          <button disabled={currentPage == pageCountprev} onClick={() => handlePreviewPage(departments)}
            className='button_table_text inline-flex items-center  bg-blue-600 border border-transparent rounded-md font-semibold navbarlink-text text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150' >
            {'<'}
          </button>
          &nbsp;
          &nbsp;
          <button disabled={currentPage == pageCountNext} onClick={() => handleNextPage(departments)}
            className=' button_table_text inline-flex items-center  bg-blue-600 border border-transparent rounded-md font-semibold navbarlink-text text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150'>
            {'>'}
          </button>
          &nbsp;

          <button onClick={() => setCurrentPage(pageCountNext)}
            className='start_end_button inline-flex items-center  bg-blue-600 border border-transparent rounded-md font-semibold navbarlink-text text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150' >
            Último
          </button>

        </div>

        {/* Botón flotante en el lado derecho */}
        {/* {(permissionInRole(auth.userpermissions, 'departments.create')) || (findRole(auth, 'Admin')) ? (*/}

        <div className="fixed bottom-5 right-5">
          <NavLink className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            href={route('departments.create')} active={route().current('departments.create')}
          >
            
            <svg className="h-8 w-8 text-white"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3" />  <line x1="12" y1="12" x2="20" y2="7.5" />  <line x1="12" y1="12" x2="12" y2="21" />  <line x1="12" y1="12" x2="4" y2="7.5" />  <line x1="16" y1="5.25" x2="8" y2="9.75" /></svg>
            Nuevo Departamento
          </NavLink>
        </div>
        
        {/* ) : ('')} */} 

      </div>
    </AuthenticatedLayout>
    </>
  )
}

export default index