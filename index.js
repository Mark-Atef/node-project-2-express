const express = require('express')
const app = express()
app.use(express.json())



app.get('/', (req, res) => {
  res.json({ test: 'Hello World!' })
})

app.post("/p1/:id", (req, res) => {
  res.json({
  // body: req.body
  // query : req.query
  // jeaders : req.headers
  params : req.params
})
})


app.post("/p12/test", (req, res) => {   // we cant let it p1 because it will conflict with the first p1/:id
  res.send("Post request to /p1")
})

app.get('/about', (req, res) => {
  res.send('About Page')
})

// response returned with json can return (Object , Array , String , Number , Boolean, Null)
// response returned with send can return (Object , Array , String , Buffer)

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})