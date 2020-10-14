import React, {useState} from 'react'
import {dateToday, getOptionText, getUniqueID} from '../../helpers'
import PT from 'prop-types'
import './Note.css'

export default function Note({addNote}){
  const [kcal, setKcal] = useState(500)
  const [date, setDate] = useState( dateToday() )
  const [eatType, setEatType] = useState('Breakfast')

  return <div className='note'>
    <div style={{fontWeight:'500'}}>New Note</div>
    <div className='note-content'>
      <select className='form-control mr-2' 
      onChange={e => {setEatType( getOptionText(e.target) )}}
      >
        <option>Breakfast</option>
        <option>Lunch</option>
        <option>Dinner</option>
      </select>
      <input type='date' className='form-control mr-2' 
      value={date}
      onChange={e => setDate(e.target.value)}
      />
      <div className='input-group mr-2'>
        <input type='number' min='100' max='2000' step='100' className='form-control' 
        value={kcal} 
        onChange={e => setKcal(e.target.value)}
        />
        <div className='input-group-append'>
          <div className='input-group-text'>kcal</div>
        </div>
      </div> 
      <button className='btn btn-primary' 
      onClick={_ => {
        const time = `${new Date().getHours()}:${new Date().getMinutes()}`
        addNote({date, time, eatType, kcal, id: getUniqueID()})
      }}
      >
      Add
      </button>
    </div>
  </div>
}

Note.propTypes = {
  addNote: PT.func.isRequired
}