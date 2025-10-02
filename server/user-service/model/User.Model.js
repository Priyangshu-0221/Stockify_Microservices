import { Schema, model } from "mongoose";

const UserSchema = new Schema({
        clerk_id:{
                type:String,
                required:true,
                unique:true,
        },
        clerk_username:{
                type:String,
                required:true,
                unique:true,
        },
        email:{
                type:String,
                required:true,
                unique:true,
        },
        watchlist :
        [{
                type: Schema.Types.ObjectId,
                ref:"Watchlist"
        }]
});
const UserModel = model("User", UserSchema);

export default UserModel;