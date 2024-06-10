import { useState } from 'react'

const NoteForm = ({ addNote }) => {
  const [newNote, setNewNote] = useState('a new note...')

  const handleSubmit = (e) => {
    e.preventDefault()
    addNote(newNote)
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={newNote} onChange={handleNoteChange} />
      <button type="submit">save</button>
    </form>
  )
}

export default NoteForm
