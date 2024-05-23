import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Register from '../Auth/Register'

const Edit = ({user, auth, edit, btn, id}) => {
  return (
    <AuthenticatedLayout
    user={auth.user}
    // header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard_2</h2>}
    >
    <Register user={user} edit={edit} btn={btn} id={id} />

    </AuthenticatedLayout>
  )
}

export default Edit