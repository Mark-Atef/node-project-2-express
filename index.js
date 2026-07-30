const express = require('express')
const app = express()
const userRoutes = require('./src/modules/user/user.routes') // import the user routes
const productRoutes = require('./src/modules/product/product.routes') // import the product routes
app.use(express.json())
app.use('/users', userRoutes) // use the user routes with the prefix /api/users
app.use('/products', productRoutes) // use the product routes with the prefix /api/products



app.get('/', (req, res) => {
  res.json({ test: 'Hello World!' }) //   internally calls JSON.stringify() and sets Content-Type: application/json
})

app.post("/p1/:id", (req, res) => {
  res.json({
  // body: req.body
  // query : req.query
  // jeaders : req.headers
  params : req.params
})
})

// const { body, params, query, headers } = req;

// res.json({
//     body,
//     params,
//     query,
//     headers
// });


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