const express=require('express')
const {addDoctor,loginAdmin, allDoctors, appointmentsAmin,appointmentCancel,adminDashboard}=require('../controllers/adminController')
const upload=require('../middlewarres/multer');
const authAdmin = require('../middlewarres/authAdmin');
const {changeAvailability}=require('../controllers/doctorController')
const adminRouter=express.Router();

adminRouter.post('/addDoctor',authAdmin,upload.single('image'),addDoctor)
adminRouter.post('/login',loginAdmin)
adminRouter.post('/all-doctors',authAdmin,allDoctors)
adminRouter.post('/change-availability',authAdmin,changeAvailability)
adminRouter.post('/appointments',authAdmin,appointmentsAmin)
adminRouter.post('/cancel-appointment',authAdmin,appointmentCancel)
adminRouter.post('/dashboard',authAdmin,adminDashboard)
module.exports=adminRouter