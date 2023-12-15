import React from 'react'
import './CustomButton.css'

const CustomButton = ({ name, type, icon }) => {
  return (
    <>
        <button className={`button button-${type}`}>{icon} {name}</button>
    </>
  )
}

export default CustomButton