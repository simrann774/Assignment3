var express = require("express")

var app = express()
const SERVER_PORT = 8088

app.get("/", (req, res) => {
    res.send("welcome to Web 700 Express Server")
})

app.get("/hello", (req,res) => {
    res.send("<h1>Hello, How are you</h1>")
}
)

app.get("/student",(rew,res) => {

    const stud = {

        sid:1,
        fnm: "simran",
        lnm:"Yadav",
        result:"PASS"
    }
    res.send(stud)

})
 //https://localhost:8088/emp?eid=100&fnm=simran&lnm=Yadav
 // query string  to read data
app.get("/emp", (req, res) => {
    console.log(req)
    res.send(req.query)
})


 app.listen(SERVER_PORT, () => {
 console.log(`Server running at http://localhost:${SERVER_PORT}`)
})
