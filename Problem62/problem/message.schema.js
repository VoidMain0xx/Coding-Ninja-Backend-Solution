// make the necessary imports here
// implement the below schemanmp i
import mongoose from "mongoose"
const messageSchema = mongoose.Schema({
    username : String,
    text : String,
    room : String,
    timestamp : Date
})

export const  messageModel= mongoose.model("Message", messageSchema);




