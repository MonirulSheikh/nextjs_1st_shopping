const mongoose=require("mongoose")

const connectDb=async()=>{
    try {
        

        if(mongoose.connections[0].readyState){
            console.log(`Already Connected`)
        }
mongoose.connect(process.env.DB,{ useUnifiedTopology: true,
    useNewUrlParser: true,})

    console.log(`Connected to Mongodb ${mongoose.connection.host}`);
    } catch (error) {
        console.log(`DB Errror ${error}`);
    }
}


module.exports=connectDb