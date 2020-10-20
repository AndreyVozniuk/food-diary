import React from 'react'
import {getOptionText} from '../../helpers'
import PT from 'prop-types'

export default function Select({setEatType, optionText}) {
  return <select className='form-control mr-2' 
  onChange={e => {setEatType( getOptionText(e.target) )}}
  >
    { optionText.map(el => <option>{el}</option>) }
  </select>
}

Select.propTypes = {
  setEatType: PT.func.isRequired,
  optionText: PT.array.isRequired
}