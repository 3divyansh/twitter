<<<<<<< HEAD
import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    like:{
        type:Array,
        default:[]
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    userDetails:{
        type:Array,
        default:[]
    },
},{timestamps:true});
=======
import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    like:{
        type:Array,
        default:[]
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    
    userDetails:{
        type:Array,
        default:[]
    },
},{timestamps:true});
>>>>>>> 66a8da562c72f88f0001ca243fee372784c35896
export const Tweet = mongoose.model("Tweet", tweetSchema);