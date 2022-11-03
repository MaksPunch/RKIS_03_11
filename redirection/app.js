const express = require('express')
const app = express()

// Absolute redirection
app.use('/index', function (request, response) {
  response.redirect('https://xsltdev.ru')
})

// Relative redirections

app.use('/home', function (request, response) {
  response.redirect(301, '/about')
})
app.use('/about', function (request, response) {
  response.send('<h1>About</h1>')
})

app.use('/home/bar', function (request, response) {
  response.redirect('about')
})
app.use('/home/about', function (request, response) {
  response.send('<h1>About</h1>')
})

app.use('/home/foo/bar', function (request, response) {
  response.redirect('./about')
})

app.use('/home/foo/bar', function (request, response) {
  response.redirect('../about')
})

app.use('/home/foo/bar', function (request, response) {
  response.redirect('.')
})

app.use('/home/foo/bar', function (request, response) {
  response.redirect('..')
})

app.listen(3000)
