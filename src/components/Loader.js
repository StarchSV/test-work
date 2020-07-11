import React from 'react';

export const Loader = () => {
  return (
    <div className='container mt-5'>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  )
}