require ('dotenv').config();
require('./config/mongodb')
const express=require('express');
const app=express();
const cors=require('cors');
const connectCloudinary = require("./config/cloudinary");
const adminRouter = require('./routes/adminRoute');
const doctorRouter = require('./routes/doctorRoute');
const userRouter = require('./routes/userRoute');

connectCloudinary();

app.use(cors());
app.use(express.json());

const PORT=process.env.PORT || 4000
app.use('/api/admin',adminRouter)
app.use('/api/doctor',doctorRouter)
app.use('/api/user',userRouter)
app.get('/',(req,res)=>{
    res.send('API WORKING')
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT} 🚀`)
})