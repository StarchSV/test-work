import React from 'react';
import Parser from 'html-react-parser'

export const Grid = ({ gridState }) => {
  return (
    <div className='container-fluid ml-sm-3 pl-sm-5 pr-sm-5'>
      <div className="row">

        {gridState.components.map((item, index) => {
          return (
            <div className={`col-${item.col} mt-4 mb-4 grid__content`} key={index}>
              <h3>{item.metadata.title}</h3>
              {Parser(item.metadata.text)}
            </div>
          )
        })}

      </div>
    </div>
  )
}