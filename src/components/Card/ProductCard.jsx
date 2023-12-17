import React, { useState } from 'react'
import './ProductCard.css'
import CustomButton from '../CustomButtons/CustomButton'
import productimage from '../../assets/heroSection.jpg'

const ProductCard = ({ image, title, category, price, description}) => {

  const [isHovered, setIsHovered] = useState(false)

  const handleHover = () => {
    setIsHovered(!isHovered)
  }

  const truncatedTItle = title.split(' ').slice(0,5).join(' ')
  const displayTitle = isHovered ? title :  truncatedTItle + (title.split(' ').length > 5 ? '...' : '') 
    
  return (
    <div className='card-container'>
        <div className='image-container'>
            <img src={image} />
        </div>
        <div className='text-container'>
            <div className='title-description-container'>
                <p className='card-title' onMouseEnter={handleHover} onMouseLeave={handleHover}>{displayTitle}</p>
                <p className='card-category'>{category}</p>
                <p className='card-price'>${price}</p>
                {/* <p className='card-description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, delectus.</p> */}
            </div>
            <div className='button-container'>
                <CustomButton name='Learn more' type='addToCart-secondary' />
                <CustomButton name='Add to cart' type='addToCart-primary' />
            </div>
        </div>
    </div>
  )
}

export default ProductCard