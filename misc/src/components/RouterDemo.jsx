import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  useNavigate,
} from 'react-router-dom'
import PropTypes from 'prop-types'
import { useState } from 'react'

const Notes = ({ notes }) => {
  return (
    <div>
      Notes
      <h2>Notes</h2>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <Link to={`/notes/${note.id}`}>{note.content}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

Notes.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
}

const Note = ({ notes }) => {
  const id = useParams().id
  const note = notes.find((n) => n.id === Number(id))

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
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
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
      <form onSubmit={onSubmit}>
        <div>
          username: <input />
        </div>
        <div>
          password: <input type="password" />
        </div>
        <button type="submit">login</button>
      </form>
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

const RouterDemo = () => {
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

  const login = (user) => {
    setUser(user)
  }

  const padding = {
    padding: 5,
  }

  return (
    <Router>
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
        <Route path="/notes" element={<Notes notes={notes} />} />
        <Route path="/users" element={<Users />} />
        <Route path="/login" element={<Login onLogin={login} />} />
        <Route path="/" element={<Home />} />
      </Routes>

      <div>Note app, Department of Computer Science 2024</div>
    </Router>
  )
}

export default RouterDemo
