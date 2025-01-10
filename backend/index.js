import express from "express"
import mysql from "mysql2"
import cors from "cors"

const app = express()
app.use(express.json())
app.use(cors())
const db=mysql.createConnection({
      host:"localhost",
      user:"root",
      password:"Dinesh@2001",
      database:"tourinn"
})
app.get("/",(req,res)=>{
      return "running"
})
app.get("/log",(req,res)=>{
      const q = "SELECT * FROM users"
      db.query(q,(err,data)=>{
            if (err) return res.json(err)
            res.json(data)
      })
})
//LOGIN PAGE AUTH
app.post("/loginauth",(req,res)=>{
      const {user_id, user_password}=req.body
      console.log(req.body)
      const q = "SELECT * FROM users WHERE user_id=? AND user_password=?"
      db.query(q,[user_id,user_password],(err,data)=>{
            if(err)
            return res.status(500).json({error:"server error",msg:err})
            if(!user_id || !user_password)
                  {
                  return res.status(401).json({msg:"required"})
                  }
           
            if(data.length>0)
            {
                  return res.status(200).json({msg:"login successfull"})
            }
            else
            {
                  return res.status(401).json({msg:"invalid"})
            }
      })
})
//register user
app.post("/registeruser",(req,res)=>{
      const {user_id,user_password}=req.body
      const q="INSERT INTO users (user_id,user_password) VALUES (?,?)"
      db.query(q,[user_id,user_password],(err,data)=>{
            if(err)
            {
                  console.log(err)
                  return res.status(500).json({msg:"server error"})
            }
            if(data.affectedRows>0)
            return res.status(200).json({msg:"success"})
            else
            return res.status(401).json({msg:"failed"})
      })
})
//getting branches
app.get("/gethotels",(req,res)=>{
const query="Select * from hotels"
db.query(query,(err,data)=>{
            if(err) return res.json(err)
            return res.json(data)
      })
})

app.listen(8800,()=>{
      console.log("running")
      return "asdsadsd"
})