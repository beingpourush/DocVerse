const express=require('express');
const doctorRouter=express.Router();
const {doctorList,loginDoctor,appointmentsDoctor,appointmentCancel,appointmentComplete,doctorDashboard,doctorProfile,updateDoctorProfile}=require('../controllers/doctorController');
const authDoctor = require('../middlewarres/authDoctor');


doctorRouter.post('/list',doctorList);
doctorRouter.post('/login',loginDoctor);
doctorRouter.post('/appointments',authDoctor,appointmentsDoctor)
doctorRouter.post('/complete-appointment',authDoctor,appointmentComplete)
doctorRouter.post('/cancel-appointment',authDoctor,appointmentCancel)
doctorRouter.post('/dashboard',authDoctor,doctorDashboard)
doctorRouter.post('/profile',authDoctor,doctorProfile)
doctorRouter.post('/update-profile',authDoctor,updateDoctorProfile)

module.exports=doctorRouter