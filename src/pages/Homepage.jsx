import React from 'react'
import './Homepage.css'

import CustomButton from '../components/CustomButtons/CustomButton'
import CustomOption from '../components/CustomOptions/CustomOption';

import { CiSearch } from "react-icons/ci";

const Homepage = () => {
  return (
    <div className='hero-section-container'>
      <div className='hero-section-headings-container'>
        <h1 className='hero-section-heading'>Discover the products you want</h1>
        <p className='hero-section-ssub-heading'>The e-commerce platform that you can trust.</p>
      </div>
      <div className='filter-search-container'>
        <div className='filter-categories-container'>
          <CustomOption name='Categories' />
        </div>
        <div className='filter-price-range-container'>
          <CustomOption name='Price range' />
        </div>
        <CustomButton name='Search' type='search' icon={<CiSearch />} />
      </div>
    </div>
  )
}

export default Homepage