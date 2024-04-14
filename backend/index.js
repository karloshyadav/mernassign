const express= require("express")
const cors= require("cors")
const mongoose= require("mongoose")

const app=express()
app.use(express.json()); 
app.use(cors())

mongoose.connect('mongodb://localhost:27017/mydatabase')
const userDataModel = require('./Modals/Userdata')
 
const PORT =9000
app.get('/', (req, res) => {
    res.send("Portfolio Backend: Server is working !");
});

app.listen(PORT, ()=> {
    console.log("\nServer is running on PORT:", PORT)
})

app.post('/login', (req,res)=>{
    const { email, password } = req.body
    console.log(email, password)
    userDataModel.findOne({username: email, password:password}).then(details=> {
        if(details) {
            res.send("LOGIN SUCESSFUL")
        }
        else {
            res.status(401).send("Email or Password is Invalid!")
        }
    })
})

app.post('/signup',  async (req,res)=> {
    const {email, password} = req.body;
    const checkUsername = await userDataModel.find({username: email})

    if (checkUsername =="") {
        userDataModel.create(req.body)
        res.send("Account Created Successfully!")
    }
    else {
        res.status(401).send("email or username already exist")
    }

})

app.get('/list',  async (req,res)=> {
    const data = await userDataModel.find()
    res.send(data)


})