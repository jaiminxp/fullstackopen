const mongoose = require('mongoose')
const { MONGO_URI } = require('./config')
const logger = require('./logger')
const url = MONGO_URI

mongoose.set('strictQuery', false)
mongoose
  .connect(url)
  .then(() => logger.info('✅ Connected to database'))
  .catch((err) => logger.error('❌ Error connecting to database', err))
