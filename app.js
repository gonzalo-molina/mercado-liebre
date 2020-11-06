const express = require('express')

const app = express()

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/index.html')
})

app.get('/ofertas', function(req, res){
    res.sendFile(__dirname + '/views/ofertas.html')    
})

app.get('/tiendas-oficiales', function(req, res){
    res.sendFile(__dirname + '/views/tiendas-oficiales.html')    
})

app.get('/vender', function(req, res){
    res.sendFile(__dirname + '/views/vender.html')    
})

app.get('/ayuda', function(req, res){
    res.sendFile(__dirname + '/views/ayuda.html')    
})


app.get('*', function(req, res){
    res.sendFile(__dirname + '/public/' + req.url)    
})

app.listen(3000, function (){
    console.log('para ver el sitio ingresa a http://localhost:3000')
})