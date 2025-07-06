import './Category.css';

export default function Category({ finalCategory,setCategoryName }) {
  let allCategory = finalCategory.map((value, index) => {
    return (
      <div key={index}>
        <li className='showCategories text-lg-center' onClick={() => setCategoryName(value.name)}>{value.name}</li>
      </div>
    )
  })
  return (
    <div>
      <h3 className='categoryHeading'>Products Category</h3>

      <ul className='ps-1 ps-lg-3'>
        {allCategory}
      </ul>
    </div>
  )
}
