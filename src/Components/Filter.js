import React from 'react'
import "./Filter.css"

const Filter = () => {
  return (
    <ul className='Filter'>
      <li className="Filter__option">Reputation</li>
      <li className="Filter__option active">New Users</li>
      <li className="Filter__option">Voters</li>
      <li className="Filter__option">Editors</li>
      <li className="Filter__option">Moderators</li>
    </ul>
  )
}

export default Filter
