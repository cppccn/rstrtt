'use strict'

import * as React from 'react'
import '../css/rstrtt.css'

const classNames = {
  primary: 'btn btn-primary',
  success: 'btn btn-success',
  info: 'btn btn-info',
  warning: 'btn btn-warning',
  error: 'btn btn-error',
  block: 'btn btn-primary btn-block',
  'btn-ghost': 'btn btn-default btn-ghost',
  'primary-ghost': 'btn btn-primary btn-ghost',
  'success-ghost': 'btn btn-success btn-ghost',
  'info-ghost': 'btn btn-info btn-ghost',
  'warning-ghost': 'btn btn-warning btn-ghost',
  'error-ghost': 'btn btn-error btn-ghost',
  default: 'btn btn-defaul'
}

const Button = (props: { type: string; value: string; onClick: any }) => {
  const { type, value, onClick } = props
  return <div className={classNames[type]} onClick={onClick}>{value}</div>
}

export default Button
