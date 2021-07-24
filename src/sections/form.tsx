import * as React from 'react'
import { HTML } from '../components'
import FormContainer from '../components/forms/form'
import InputTextArea from '../components/forms/input-area'
import InputSet from '../components/forms/input-set'
import InputText from '../components/forms/input-text'

const code = `.form-group.form-success
.form-group.form-error
.form-group.form-warning
`
const code2 = `<form class="form">
  <fieldset class="form-group">
    <label for="username">USERNAME:</label>
    <input id="username" type="text" placeholder="type your name..." class="form-control" />
  </fieldset>
  <fieldset class="form-group">
    <label for="email">EMAIL:</label>
    <input id="email" type="email" placeholder="" class="form-control" />
  </fieldset>
  <fieldset class="form-group">
    <label for="country">COUNTRY:</label>
    <select id="country" class="form-control">
      <option>China</option>
      <option>U.S.</option>
      <option>U.K.</option>
      <option>Japan</option>
    </select>
  </fieldset>
  <fieldset class="form-group form-textarea">
    <label for="message">MESSAGE:</label>
    <textarea id="message" rows="5" class="form-control"></textarea>
  </fieldset>
  <div class="form-actions">
    <button type="button" class="btn btn-primary btn-block">Submit</button>
  </div>
</form>
`

function Form () {
  return <div>
    <h4>Form</h4>
      <FormContainer>
        <InputText
          id='username'
          label='USERNAME:'
          placeholder='type your name...'
        />
        <InputText
          id='email'
          label='EMAIL:'
          placeholder='type your email...'
        />
        <InputSet
          id='country2'
          label='COUNTRY:'
          options={ ['China', 'U.S.', 'France', 'Italy'] }
        />
        <InputTextArea
          id='message'
          label='MESSAGE:'
          placeholder='type your message...'
        />
        <div className="form-actions">
          <button
            type="button"
            className="btn btn-primary btn-block">
              Submit
          </button>
        </div>
      </FormContainer>
      <HTML data={ code2 } />
      <h5>Stateful Form</h5>
      <FormContainer>
      <InputText
          id='username2'
          label='USERNAME:'
          placeholder='type your name...'
          success
        />
        <InputText
          id='email2'
          label='EMAIL:'
          placeholder='type your email...'
          warning
        />
        <InputSet
          id='country2'
          label='COUNTRY:'
          options={ ['China', 'U.S.', 'France', 'Italy'] }
          error
        />
        <div className="form-actions">
          <button
            type="button"
            className="btn btn-primary btn-block">
              Submit
          </button>
        </div>
      </FormContainer>
      <HTML data={ code } />
    </div>
}

export {
  Form
}
