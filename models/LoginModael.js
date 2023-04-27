const mongoose =  require("mongoose")
const {Schema,model}=mongoose

const loginSchema = new Schema({
    name:{type:String,required:false,min:4,unique:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    age:{type:Number,required:false},
    dob:{type:String,required:false},
    city:{type:String,required:false}, 
    isAdmin:{type:Boolean,default:false,required:false}

})
const LoginModel =  model("employees",loginSchema)


module.exports = LoginModel