import React, {useState} from 'react'
import {dateToday, getUniqueID} from '../../helpers'
import Select from '../Select/Select'
import PT from 'prop-types'
import './Note.css'

export default function Note({addNote}){
  const [kcal, setKcal] = useState(500)
  const [date, setDate] = useState( dateToday() )
  const [eatType, setEatType] = useState('Breakfast')

  function addItem() {
    const time = `${new Date().getHours()}:${new Date().getMinutes()}`
    addNote({date, time, eatType, kcal, id: getUniqueID()})
  }

  return <div className='note'>
    <div style={{fontWeight:'500'}}>New Note</div>

    <div className='note-content'>
      <Select 
      setEatType={setEatType}
      optionText = {['Breakfast', 'Lunch', 'Dinner']}
      />

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

      <button className='btn btn-primary' onClick={addItem}>Add</button>
    </div>
  </div>
}

Note.propTypes = {
  addNote: PT.func.isRequired
}