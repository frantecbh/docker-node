const express = require('express')

const PORT = 3000
const HOST = '0.0.0.0'

const app = express()


app.get('/', (req, res) =>{
  return res.send('Helo World - FrantecBH')
})


app.listen(PORT, HOST, () =>{
  console.log('server on port, 3000')
})



