import React from 'react'
import PT from 'prop-types'
import './Search.css'

export default function Search({searchNotes}){
  return <div className='search-block'>
    <input 
    autoomplete='off' 
    className='form-control' 
    name='text' 
    placeholder='Search...' 
    onChange={e => searchNotes(e.target.value)}
    />
  </div>
}

Search.propTypes = {
  searchNotes: PT.func.isRequired
}