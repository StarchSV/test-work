import React from 'react';

export const Input = ({ item, containerClassName = '' }) => {
  return (
    item.type === 'textarea'
      ?
        <div className={`form-group ${containerClassName}`}>
          <label htmlFor={item.name}>{item.required ? item.label : `${item.label} (не обязательно)`}</label>
          <textarea
            id={item.name}
            className="form-control"
            required={item.required}
          />
        </div>
      : item.type === 'checkbox' ?
        <div className='mb-3'>
          <div className="form-check form-group col-md-12 custom-checkbox">
            <input className="form-check-input form__checkbox__custom custom-control-input" type={item.type} id={item.name}/>
            <label className="form-check-label custom-control-label" htmlFor={item.name} dangerouslySetInnerHTML={{__html: item.label}}>
            </label>
          </div>
        </div>
      :
        <div className={`form-group ${containerClassName}`}>
          <label htmlFor={item.name}>{item.required ? item.label : `${item.label} (не обязательно)`}</label>
          <input
            type={item.type}
            id={item.name}
            className="form-control"
            required={item.required}
          />
        </div>
  )
}