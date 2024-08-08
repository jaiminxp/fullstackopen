import axios from 'axios'

const baseUrl = 'http://localhost:3001/notes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
  const payload = {
    content,
    important: false,
  }

  const response = await axios.post(baseUrl, payload)
  return response.data
}

const toggleImportance = async (id, currentImportant) => {
  const payload = {
    important: !currentImportant,
  }

  const res = await axios.patch(`${baseUrl}/${id}`, payload)
  return res.data
}

export default { getAll, createNew, toggleImportance }
