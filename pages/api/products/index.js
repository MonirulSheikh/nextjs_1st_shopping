const connectDb=require("../../../server/db/connection")

export default function handler(req,res){
    res.json({message:"Testing"})
}

connectDb()