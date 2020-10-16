const http = require('net')
const clientList = []
const app = http.createServer()
app.on('connection', client => {
  client.write('HI')
  clientList.push(client)
  client.on('data', data => {
    console.log('receive:',data.toString())
    clientList.forEach(c => c.write(data))
  })
})
app.listen(8000, () => console.log('server is running on 8000'))