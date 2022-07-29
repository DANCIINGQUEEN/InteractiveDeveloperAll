const express=require('express')
const app=express()
const path=require('path')
app.use(express.static('public'))
// app.listen(2222,()=>{console.log("app start");})
let port=process.env.PORT
if(port==null||port==""){
    port=2222
}
app.listen(port,()=>{console.log("app start")})
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'home.html'))
})
app.get('/ball', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'ball.html'))
})
app.get('/matrix', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'matrix.html'))
})
app.get('/wave', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'wave.html'))
})
app.get('/clock', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'clock.html'))
})