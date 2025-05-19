import React from 'react';
import './Category.css';

export default function Category({ finalCategory,setCategoryName }) {
  let allCategory = finalCategory.map((value, index) => {
    return (
      <div key={index}>
        <li onClick={() => setCategoryName(value.name)}>{value.name}</li>
      </div>
    )
  })
  return (
    <div>
      <h3 className='fw-normal p-1 ps-5 mb-5'>Products Category</h3>

      <ul>
        {allCategory}
      </ul>
    </div>
  )
}
