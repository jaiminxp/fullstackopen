import { useDispatch, useSelector } from 'react-redux'
import { toggleImportanceOf } from '../reducers/noteReducer'
import noteService from '../services/notes'

const Note = ({ note, handleClick }) => {
  return (
    <li style={{ cursor: 'pointer' }} onClick={handleClick}>
      {note.content}
      <strong> {note.important ? 'important' : ''}</strong>
    </li>
  )
}

const Notes = () => {
  const dispatch = useDispatch()
  const notes = useSelector(({ notes, filter }) => {
    if (filter === 'ALL') {
      return notes
    }

    return filter === 'IMPORTANT'
      ? notes.filter((note) => note.important)
      : notes.filter((note) => !note.important)
  })

  const handleNoteClick = async (note) => {
    const changedNote = await noteService.toggleImportance(
      note.id,
      note.important
    )
    dispatch(toggleImportanceOf(changedNote))
  }

  return (
    <ul>
      {notes.map((note) => (
        <Note
          key={note.id}
          note={note}
          handleClick={() => handleNoteClick(note)}
        />
      ))}
    </ul>
  )
}

export default Notes
