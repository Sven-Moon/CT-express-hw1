const express = require('express')
const path = require('path')

const app = express()
const port = 3000;
app.listen(port, () => {
  console.log(`Server running. Listening on port ${port}`)
})
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.render('pages/home')
})

app.get('/profile', (req, res) => {
  res.render('pages/profile')
})

app.get('/login', (req, res) => {
  res.render('pages/login')
})

app.get('/register', (req, res) => {
  res.render('pages/register')
})

app.get('/user', (req, res) => {
  res.render('pages/user')
})