import React, {useState} from 'react'
import EatItem from '../EatItem/EatItem'
import Note from '../Note/Note'
import Search from '../Search/Search'
import './App.css'

function App() {
  const [notes, setNotes] = useState([])

  function addNote(newNote){
    setNotes([...notes, newNote])
  }

  function removeNote(id){
    setNotes(notes.filter(el => el.id !== id))
  }

  function searchNotes(text){
    setNotes(notes.map(el =>{ 
      el.eatType.toLowerCase().indexOf(text.toLowerCase()) === 0 ? el.isHide = false : el.isHide = true
      return el
    })
    )
  }

  let countHiddenEl = 0
  notes.forEach(el => {if(el.isHide) countHiddenEl++})

  return <div className='wrap'>
    <div className='content p-4'>
      <h1>Food diary</h1>
      <Note addNote={addNote}/>
      <Search searchNotes={searchNotes}/>
      <div  className='eat-list'>
        {notes.length === 0 || countHiddenEl === notes.length ? <div className='note-empty'>Notes list is empty.</div> :
         notes.map(el => {
            return <EatItem 
            date={el.date} 
            time={el.time} 
            eatType={el.eatType} 
            kcal={el.kcal}
            id={el.id}
            isHide={el.isHide}
            key={el.id}
            removeNote={removeNote}
            />
          })
        }
      </div>
    </div>
  </div>
}

export default App
