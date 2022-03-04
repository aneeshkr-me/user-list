import React from 'react'
import Tag from './Tag'
import "./Card.css"

const Card = ({ user, search }) => {

  return (
    user.filter((filteredUser) => {
      if (filteredUser === "") return
      else if (filteredUser.name.first.toLowerCase().includes(search.toLowerCase())) return filteredUser
    }).map((user, i) => {
      return (
        <div className='Card' key={i}>
          <img className='Card__profile' src={user.picture.large} alt="" />
          <div className="Card__info">
            <h4 className="heading">{user.name.first} {user.name.last}</h4>
            <p>{user.location.city}, {user.location.country}</p>
            <div className="Tag__container">
              <Tag user={user} />
            </div>
          </div>
        </div>
      )
    })
  )
}

export default Card
