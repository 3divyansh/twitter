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


