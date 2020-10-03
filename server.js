const http = require('http')
const app = require('./app')
const server = http.createServer(app)

const port = process.env.POPT ?? 3000

server.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`)
})
