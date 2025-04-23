import React from 'react'
import img from '../assets/IMG_20250320_173249.jpg';
import './UserCard.css';

const UserCard = (props) => {
  return (
    <div className='user-container'>
        <p id='user-name'>{props.name}</p>
        <img id='user-img' src={props.image} alt="" />
        <p id='user-desc'>{props.desc}</p>
      
    </div>
  )
}

export default UserCard