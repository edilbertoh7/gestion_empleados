import React from 'react'
import Create from './Create'

const Edit = ({auth,department, id, edit,btn}) => {
  return (
    <Create auth={auth}  department={department} id={id} edit={edit} btn={btn}  />
  )
}

export default Edit