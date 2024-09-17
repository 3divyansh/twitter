<<<<<<< HEAD
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({
    path:"../config/.env"
})
const databaseConnection = () => {
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("Connected to mongoDB");
    }).catch((error)=>{
        console.log(error);
    })
}
export default databaseConnection;
=======
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({
	path:"../config/.env"
})
const databaseConnection = ( ) => {
mongoose.connect(process.env.MONGO_URL,
	
).then(()=>{
	console.log("Connected to MongoDB",)
}).catch((error)=>{
	console.error("Error connecting to MongoDB",error);
})
}
export default databaseConnection;


>>>>>>> 66a8da562c72f88f0001ca243fee372784c35896
