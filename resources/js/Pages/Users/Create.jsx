import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Register from '../Auth/Register'

const create = ({auth, action, btn, document_types, gender_types}) => {
  return (
    
    
    <AuthenticatedLayout
    user={auth.user}
    // header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard_2</h2>}
    >
    <Register action={action} btn={btn} document_types={document_types} gender_types={gender_types} />

    </AuthenticatedLayout>
  )
}

export default create