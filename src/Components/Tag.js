import React from 'react'
import "./Tag.css"
const Tag = ({ user }) => {
  return (
    <>
      <span className='Tag'>
        {user.cell}
      </span>
      <span className='Tag'>
        {user.gender}
      </span>
    </>
  )
}

export default Tag
