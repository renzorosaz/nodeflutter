const { Schema,model } =  requiere('mongoose');
const bcrypt = requiere('bcryptjs');

const userSchema = new Schema({
    username : String ,
    email: String,
    password: String
});

userSchema.methods.encryptPassword = async(password) =>{
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password,salt);
};

userSchema.methods.validatePassword = function(password) {
    return bcrypt.compare(password, this.password);
};

module.exports = model('User', userSchema)