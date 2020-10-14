import React from 'react'
import PT from 'prop-types'

export default function EatItem({date, time, eatType, kcal, id, isHide = false, removeNote}) {
  let itemClass = `justify-content-between mt-3`
  return <div className={isHide === true ? `d-none ${itemClass}` : `d-flex ${itemClass}`} style={{width:'45%'}}>
    <div>
      <small className='text-muted'>{`${date} ${time}`}</small><br />{`${eatType} – ${kcal} kcal`}
    </div>
    <div>
      <button type='button' className='btn btn-secondary ml-2' onClick={_ => removeNote(id)}>×</button>
    </div>
</div>
}

EatItem.propTypes = {
  date: PT.string.isRequired,
  time: PT.string.isRequired,
  eatType: PT.string.isRequired,
  kcal: PT.number.isRequired,
  id: PT.string.isRequired,
  isHide: PT.bool, 
  removeNote: PT.func.isRequired
}