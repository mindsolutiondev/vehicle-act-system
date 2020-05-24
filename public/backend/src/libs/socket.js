let cron = require('node-cron')

module.exports = async function socketserver (socket, server, log) {
    let io = socket.listen(server)

    io.on('connection', async (client) => {
      console.log('connected')
      client.emit('serverstatus', "online")

      client.on('disconnect', () => {
        console.log('user disconnected')
      })
    })
}