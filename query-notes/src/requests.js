import axios from 'axios'

export const getNotes = () =>
  axios.get('http://localhost:3001/notes').then((res) => res.data)

export const createNote = (newNote) =>
  axios.post('http://localhost:3001/notes', newNote).then((res) => res.data)
