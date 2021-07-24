/* eslint-disable react/prop-types */
'use strict'

import * as React from 'react'
import '../../css/rstrtt.css'

// eslint-disable-next-line react/prop-types
const InputSet = (props) => {
  const { id, label, options } = props
  let className = 'form-group form-textarea'
  className += (props.warning) ? ' form-warning' : ''
  className += (props.success) ? ' form-success' : ''
  className += (props.error) ? ' form-error' : ''
  return <fieldset className={className}>
    {label ? <label htmlFor={id}>{label}</label> : null}
    <select id={id} className="form-control">
      {options.map((opt, index) => <option key={index + 'option'}>{opt}</option>)}
    </select>
    {props.children || null}
  </fieldset>
}

export default InputSet
