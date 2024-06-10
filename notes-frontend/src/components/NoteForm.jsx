import { useState } from 'react'

const NoteForm = ({ addNote }) => {
  const [newNote, setNewNote] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    await addNote(newNote)
    setNewNote('')
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={newNote}
        onChange={handleNoteChange}
        placeholder="a new note..."
      />
      <button type="submit">save</button>
    </form>
  )
}

export default NoteForm
