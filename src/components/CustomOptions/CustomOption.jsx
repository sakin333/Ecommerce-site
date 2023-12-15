import React from 'react'
import './CustomOption.css'

import CustomButton from '../CustomButtons/CustomButton';

import { IoChevronDown } from "react-icons/io5";

const CustomOption = ({name}) => {
  return (
    <div className='option-container'>
        <p className='option-heading'>{name}</p>
        <div className='selected-option-container'>
            <p className='selected-option'>Sports wear</p>
            <CustomButton type='chevron' icon={<IoChevronDown />} />
        </div>
    </div>
  )
}

export default CustomOption