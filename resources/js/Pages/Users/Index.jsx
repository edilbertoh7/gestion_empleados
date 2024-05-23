import React, { useState } from 'react';
import DataTable from '@/Components/Datatable';
import NavLink from '@/Components/NavLink';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link, Head } from '@inertiajs/react';

const index = ({ users, auth }) => {

  const columns = React.useMemo(
    () => [
      {
        Header: 'nombre completo',
        accessor: 'name',
      },
      {
        Header: 'Departamento',
        accessor: 'last_name',
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

  const handlePreviewPage = (users) => {
    setCurrentPage(prevPage => prevPage - 1);
    // console.log(pageSize);
  };
  const handleNextPage = (users) => {

    setCurrentPage(prevPage => prevPage + 1);
  };

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const usersToShow = users.slice(currentPage * pageSize, (currentPage + 1) * pageSize);

  const pageCountNext = Math.ceil(users.length / pageSize) - 1;
  const pageCountprev = 0

  return (<>
    <Head title="Empleados" />
    <AuthenticatedLayout
      user={auth.user}

    >
      <div className='table-pading' >

        <div className="relative overflow-x-auto">

          <DataTable
            auth={auth} columns={columns} data={usersToShow} infodata={users} pageSize={pageSize} setpageSize={setpageSize}
            currentPage={currentPage + 1} colspan={2}
            rutaver={'users.show'}
            rutaeditar={'users.edit'}
            rutaeliminar={'users.destroy'}
            primaryName={'Empleado'}
            secondaryName={'Empleados Talento Pro'}
          />
          {/* Agregar controles de paginación */}
          <button disabled={currentPage == pageCountprev} onClick={() => setCurrentPage(0)}
            className='start_end_button inline-flex items-center  bg-blue-600 border border-transparent rounded-md font-semibold navbarlink-text text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150' >
            Inicio
          </button>
          &nbsp;

          <button disabled={currentPage == pageCountprev} onClick={() => handlePreviewPage(users)}
            className='button_table_text inline-flex items-center  bg-blue-600 border border-transparent rounded-md font-semibold navbarlink-text text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150' >
            {'<'}
          </button>
          &nbsp;
          &nbsp;
          <button disabled={currentPage == pageCountNext} onClick={() => handleNextPage(users)}
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
        <div className="fixed bottom-5 right-5">
          <NavLink className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            href={route('users.create')} active={route().current('users.create')}
          >
            <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />  <circle cx="8.5" cy="7" r="4" />  <line x1="20" y1="8" x2="20" y2="14" />  <line x1="23" y1="11" x2="17" y2="11" /></svg>
            Nuevo Empleado
          </NavLink>
        </div>

      </div>
    </AuthenticatedLayout>
  </>
  )
}

export default index