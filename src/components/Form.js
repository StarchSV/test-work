import React from 'react';
import {Input} from "../Input";

export const Form = ({formState}) => {

  const {main, additional} = formState.field_groups

  const submitButtonHandler = event => {
    event.preventDefault()
  }

  return (
    <form>
      <div className="container-fluid ml-sm-3 pl-sm-5 pr-sm-5">
        <h3>{formState.title}</h3>
        <div className="row">
          <div className={`row ${main}`}>
            { formState.fields.filter(item => item.group === 'main').map((item, index) => {
              return (
                <Input item={item} index={index} containerClassName='col-md-6' key={index}/>
              )
            })}
          </div>
          <div className={`row ${additional}`}>
            { formState.fields.filter(item => item.group === 'additional').map((item, index) => {
              return (
                <Input item={item} index={index} containerClassName='col-md-12' key={index}/>
              )
            })}
          </div>
        </div>
        <div>
          { formState.fields.filter(item => item.group !== 'additional' && item.group !== 'main').map((item, index) => {
            return (
              <Input item={item} index={index} key={index}/>
            )
          })}
        </div>
        <div>
          <button
              type='submit'
              className='form__submit-button form-group'
              onClick={submitButtonHandler}
          >
            {formState.submit_button.text}
          </button>
        </div>
      </div>
    </form>
  )
}