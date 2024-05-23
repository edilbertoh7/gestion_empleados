import React from 'react'
import Register from '../Auth/Register'

const create = ({action, btn, document_types, gender_types}) => {
  return (
    <Register action={action} btn={btn} document_types={document_types} gender_types={gender_types} />
  )
}

export default create