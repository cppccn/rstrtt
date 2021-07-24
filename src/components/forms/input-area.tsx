/* eslint-disable react/prop-types */
'use strict'

import * as React from 'react'
import '../../css/rstrtt.css'

// eslint-disable-next-line react/prop-types
const InputTextArea = (props) => {
  const { id, label, placeholder } = props
  let className = 'form-group form-textarea'
  className += (props.warning) ? ' form-warning' : ''
  className += (props.success) ? ' form-success' : ''
  className += (props.error) ? ' form-error' : ''
  return <fieldset className={className}>
    {(label) ? <label htmlFor={id}>{label}</label> : null}
    <textarea
      placeholder={placeholder}
      id={id}
      rows={5}
      className="form-control"
    />
    { props.children || null }
  </fieldset>
}

export default InputTextArea
