const app = require('./app')
const config = require('./utils/config')
const logger = require('./utils/logger')

require('dotenv').config()

const PORT = process.env.PORT
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`)
})