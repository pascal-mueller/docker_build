const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

// For parsing application/json
app.use(bodyParser.json())

// Landing page
app.get('/', (req, res) => {
  res.send('Hallo! Bestelle jetzt deine Visitenkarte.')
})

// orders/businesscard
app.post('/orders/businesscard', (req, res) => {
  data = req.body // ATTENTION: Unvalidated user input!

  msg = data.brand + " Visitenkarte für " + data.name + " ist bestellt."

  payload = {
    "message" : msg
  }

  res.json(payload)
})

// Start server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
