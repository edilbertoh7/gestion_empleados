import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { usePage } from '@inertiajs/react';
import NavLink from '@/Components/NavLink';
import { switAlert } from '@/functions/functions'
import { Link, Head } from '@inertiajs/react';



const show = ({ user, auth, success }) => {


  const { props } = usePage();
  // console.log(user);
  // console.log(props);

  return (
    <AuthenticatedLayout
    user={auth.user}
    // header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard_2</h2>}
    >
<Head title="Empleados" />

      <div className='table-pading'>
        {props.success && <div className="mb-4 font-medium text-xl text-green-600">{switAlert(props.success)}</div>}

        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-400 rounded-lg overflow-hidden">
            <thead className="text-xs uppercase bg-gray-700 text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                {user[0].name} {user[0].last_name}
                </th>
                <th scope="col" className="px-6 py-3">
                  <NavLink
                    className='inline-flex items-center  bg-blue-600 border border-transparent rounded-md font-semibold navbarlink-text text-white uppercase tracking-widest hover:bg-blue-300 focus:bg-blue-300 active:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150'
                    href={route('dashboard')} active={route().current('dashboard')}>
                    Todos los Empleados
                  </NavLink>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className={`border-b bg-white border-gray-700`}>
                {user.map((user, index)=>(
                  
                <th key={index} colSpan={2} scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-white">
                  <p className='pt-3'>Nombre: {user.name} {user.last_name} </p>
                  <p className='pt-3'>Dirección: {user.address} </p>
                  <p className='pt-3'>Telefono: {user.phone} </p>
                  <p className='pt-3'>Identificación: {user.document_type} {user.document_number} </p>
                  <p className='pt-3'>Fecha de Nacimiento: {user.birth_date} </p>
                  <p className='pt-3'>Departamento: {user.depname} </p>
                  <p className='pt-3'>Correo: {user.email} </p>
                  <p className='pt-3'>Telefono: {user.phone}</p>
                 
                </th>
                ))  }
              </tr>
            </tbody>
          </table>
        </div>

      </div>

    </AuthenticatedLayout>
  )
}

export default show