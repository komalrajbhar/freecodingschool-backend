const mongoose = require('mongoose');
const roles = ["TEACHER", "STUDENT","VOLUNTEER"];
const userSchema = new mongoose.Schema({
    email: { type: String, required: true ,lowercase: true,trim:true},
    first_name: { type: String, required: true,trim:true },
    last_name: { type: String, required: false,trim:true },
    password: { type: String, required: true ,trim:true},
    is_verified: { type: Boolean, required: true ,default:true},
    target: {
        role: { type: String, enum: roles }
    },
    createdAt:{
        type: Date,
        default: Date.now
    }    
},{timestamps: true});
const user = mongoose.model('Role',userSchema);
const getUserByQuery = async (query) => {   
	const result = user.findOne(query).cursor();  
    const response = await result.next();
    return response;  
}
const getUserById = async(query) => {
	const result = user.findOne({_id: parseInt(query)}).cursor(); 
    const response = await result.next(); 
    return response;
}
module.exports = {
    user,
    getUserByQuery,
    getUserById,
    roles,
    userSchema
}