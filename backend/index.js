import express from 'express'
import cors from 'cors' 


const app =express()
app.use(express.json())
app.use(cors())

let index=0

app.get('/home',(req,res)=>{
	const initNum=index
	res.end(initNum.toString())
});

app.post('/inc', function (req,res) {
	console.log(req.body , "Here we go!")
	const countMe = index++
	res.send(countMe.toString())

})
const feedback=()=>{
	console.log("The server runs on http://localhost:3005")
}
app.listen(3005, feedback)