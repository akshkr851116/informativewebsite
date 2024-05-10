const express =require("express")
const app=express("express")
const hbs=require("hbs")
const bodyparser=require("body-parser")
const nodemailer=require("nodemailer")
const encode=new bodyparser.urlencoded()
const transporter=new nodemailer.createTransport({
    host:"smtp.gmail.com",
    post:578,
    tls:true,
    auth:{
        user:"akshkr85111@gmail.com",
        pass:"dzgubiyzgfejrvfa"
    }
})
const path=require("path")
const { error, log } = require("console")
app.set("view engine","hbs")
app.use(express.static("views/public"))
hbs.registerPartials(path.join(__dirname,"./views/partials"))
app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/about",(req,res)=>{
    res.render("about",{tittle:"About Us"} )
})
app.get("/service",(req,res)=>{
    res.render("service",{tittle:"Service"})
})
app.get("/contact",(req,res)=>{
    res.render("contact" ,{tittle:"Contact Us" ,show:false})
})
app.post("/contact-us", encode,(req,res)=>{
    // console.log(req.body)
    let mailOptions={
        from:"akshkr85111@gmail.com",
        to:req.body.email,
        subject:"Your Query Received",
        text:`
        Hello ${req.body.name}
        Your Query has been received Our team Contact you soon 
        Team:Labsky
        `

    }
    transporter.sendMail( mailOptions,(error)=>{
        console.log(error)
    })
    mailOptions={
        from:"akshkr85111@gmail.com",
        to:"akshkr85111@gmail.com",
        subject:"Again new Query Received",
        html:`
         <table border="2px" cellpadding="10px" cellspcing="0">
         <tbody>
         <tr>
         <th>Name</th>
         <td>${req.body.name}</td>
         </tr>
         <tr>
         <th>Phone</th>
         <td>${req.body.phone}</td>
         </tr>
         <tr>
         <th>Email</th>
         <td>${req.body.email}</td>
         </tr>
         <tr>
         <th>Subject</th>
         <td>${req.body.subject}</td>
         </tr>
         <tr>
         <th>Subject</th>
         <td>${req.body.message}</td>
         </tr>
         </tbody>
         </table>
        `

    }
    transporter.sendMail( mailOptions,(error)=>{
        console.log(error)
    })

    res.render("contact" ,{tittle:"Contact Us",show:true})
})
app.get("/team",(req,res)=>{
    res.render("team",{tittle:"Our Team"})
})
app.get("/testimonial",(req,res)=>{
    res.render("testimonial",{tittle:"Testimonial"})
})
app.get("/feature",(req,res)=>{
    res.render("feature",{tittle:"Feature"})
})
app.get("/appoinment",(req,res)=>{
    res.render("appoinment",{tittle:"Appoinment",show:false})
})
app.post("/appoinment",encode,(req,res)=>{
    let mailOptions={
        from:"akshkr85111@gmail.com",
        to:req.body.email,
        subject:"Your Appoinment  Received",
        text:`
        Hello ${req.body.name}
        Your appoinment has been received Our team Contact you soon 
        Team:Labsky
        `

    }
    transporter.sendMail( mailOptions,(error)=>{
        console.log(error)
    })
    mailOptions={
        from:"akshkr85111@gmail.com",
        to:"akshkr85111@gmail.com",
        subject:" New Appoinment Received",
        html:`
         <table border="2px" cellpadding="10px" cellspcing="0">
         <tbody>
         <tr>
         <th>Name</th>
         <td>${req.body.name}</td>
         </tr>
         <tr>
         <th>Email</th>
         <td>${req.body.email}</td>
         </tr>
         <tr>
         <th>Phone</th>
         <td>${req.body.phone}</td>
         </tr>
         <tr>
         <th>Service</th>
         <td>${req.body.service}</td>
         </tr>
         <tr>
         <th>Message</th>
         <td>${req.body.message}</td>
         </tr>
         </tbody>
         </table>
        `

    }
    transporter.sendMail( mailOptions,(error)=>{
        console.log(error)
    })

    res.render("appoinment",{tittle:"Appoinment",show:true})
})
app.get("*",(req,res)=>{
    res.render("404")
})

app.listen(8000,()=>{console.log("server is running at http://localhost:8000");})