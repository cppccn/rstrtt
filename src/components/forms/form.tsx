'use strict'

import * as React from 'react'
import '../../css/rstrtt.css'

// eslint-disable-next-line react/prop-types
const FormContainer = ({ children }) => {
  return <form className="form">
    { children }
  </form>
}

export default FormContainer
