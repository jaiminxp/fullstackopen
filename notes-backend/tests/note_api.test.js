const { test, after, beforeEach } = require('node:test')
const assert = require('node:assert')
const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const Note = require('../models/note')
const api = supertest(app)

const initialNotes = [
  new Note({
    content: 'HTML is easy',
    important: false,
    date: new Date(),
  }),
  {
    content: 'Browser can execute only JavaScript',
    important: true,
    date: new Date(),
  },
]

beforeEach(async () => {
  await Note.deleteMany({})
  await Note.insertMany(initialNotes)
})

test('notes are returned as json', async () => {
  await api
    .get('/api/notes')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('there are two notes', async () => {
  const response = await api.get('/api/notes')
  assert.strictEqual(response.body.length, initialNotes.length)
})

test('the first note is about HTTP methods', async () => {
  const response = await api.get('/api/notes')
  const contents = response.body.map((e) => e.content)

  assert(contents.includes('HTML is easy'))
})

after(async () => {
  await mongoose.connection.close()
})
