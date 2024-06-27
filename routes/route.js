import express from "express"
import { saveSendEmails,getEmails ,moveEmailsToBin , deleteEmails , toggleStarredEmail} from "../controller/email.controller.js"
// import EmailModel from '../models/email.js'


const route  = express.Router()

route.post('/save' , saveSendEmails)
route.get('/emails/:type' , getEmails)
route.post('/save-draft' , saveSendEmails)
route.delete('/delete', deleteEmails);
route.post('/bin' , moveEmailsToBin)
route.post('/starred' , toggleStarredEmail )

// route.get('/find' , async (req , res )=>{
//     let emails = await EmailModel.find()
//     res.send(emails)
// })

export default route 


