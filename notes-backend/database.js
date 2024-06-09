const mongoose = require('mongoose')
const url = process.env.MONGO_URI

mongoose.set('strictQuery', false)
mongoose
  .connect(url)
  .then(() => console.log('✅ Connected to database'))
  .catch((err) => console.log('❌ Error connecting to database', err))
