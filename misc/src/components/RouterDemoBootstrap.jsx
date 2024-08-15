import {
  Routes,
  Route,
  Link,
  useNavigate,
  useMatch,
  Navigate,
} from 'react-router-dom'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { Table, Form, Button, Alert } from 'react-bootstrap'

const Notes = ({ notes }) => {
  return (
    <div>
      <h2>Notes</h2>
      <Table striped>
        <tbody>
          {notes.map((note) => (
            <tr key={note.id}>
              <td>
                <Link to={`/notes/${note.id}`}>{note.content}</Link>
              </td>
              <td>{note.user}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

Notes.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
}

const Note = ({ note }) => {
  return (
    <div>
      <h2>{note.content}</h2>
      <div>{note.user}</div>
      <div>
        <strong>{note.important ? 'important' : ''}</strong>
      </div>
    </div>
  )
}

Note.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    important: PropTypes.bool.isRequired,
  }),
}

const Users = () => (
  <div>
    <h2>TKTL notes app</h2>
    <ul>
      <li>Jaimin Parmar</li>
      <li>Juha Tauriainen</li>
      <li>Arto Hellas</li>
    </ul>
  </div>
)

const Login = (props) => {
  const navigate = useNavigate()

  const onSubmit = (event) => {
    event.preventDefault()
    props.onLogin('jaimin')
    navigate('/')
  }

  return (
    <div>
      <h2>login</h2>
      <Form onSubmit={onSubmit}>
        <Form.Group>
          <Form.Label>username:</Form.Label>
          <Form.Control type="text" name="username" />
        </Form.Group>

        <Form.Group>
          <Form.Label>password:</Form.Label>
          <Form.Control type="password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          login
        </Button>
      </Form>
    </div>
  )
}

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
}

const Home = () => (
  <div>
    <h2>TKTL notes app</h2>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates quam
      officia velit labore, voluptatum debitis fugit ipsum laborum voluptate
      repellat alias fuga atque ducimus omnis modi aperiam reprehenderit!
      Debitis, perferendis.
    </p>
  </div>
)

const RouterDemoBootstrap = () => {
  const [notes] = useState([
    {
      id: 1,
      content: 'HTML is easy',
      important: true,
      user: 'Matti Luukkainen',
    },
    {
      id: 2,
      content: 'Browser can execute only JavaScript',
      important: false,
      user: 'Matti Luukkainen',
    },
    {
      id: 3,
      content: 'Most important methods of HTTP-protocol are GET and POST',
      important: true,
      user: 'Arto Hellas',
    },
  ])

  const [user, setUser] = useState(null)
  const [message, setMessage] = useState(null)

  const match = useMatch('/notes/:id')

  const note = match
    ? notes.find((note) => note.id === Number(match.params.id))
    : null

  const login = (user) => {
    setUser(user)
    setMessage(`welcome ${user}`)
    setTimeout(() => {
      setMessage(null)
    }, 10000)
  }

  const padding = {
    padding: 5,
  }

  return (
    <div className="container">
      {message && <Alert variant="success">{message}</Alert>}
      <div>
        <Link style={padding} to="/">
          home
        </Link>
        <Link style={padding} to="/notes">
          notes
        </Link>
        <Link style={padding} to="/users">
          users
        </Link>
        {user ? (
          <em>{user} logged in</em>
        ) : (
          <Link style={padding} to="/login">
            login
          </Link>
        )}
      </div>

      <Routes>
        <Route path="/notes/:id" element={<Note note={note} />} />
        <Route path="/notes" element={<Notes notes={notes} />} />
        <Route
          path="/users"
          element={user ? <Users /> : <Navigate replace to="/login" />}
        />
        <Route path="/login" element={<Login onLogin={login} />} />
        <Route path="/" element={<Home />} />
      </Routes>

      <div>Note app, Department of Computer Science 2024</div>
    </div>
  )
}

export default RouterDemoBootstrap
