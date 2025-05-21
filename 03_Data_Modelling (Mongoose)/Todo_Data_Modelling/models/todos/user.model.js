import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  
{

  // Below is also correct, but if we want to add multiple information to each, we can do that by using object
  
  // username: String,
  // email: String,
  // isActive: Boolean

  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    // required: [true, "Password is required to proceed"]
    // The required field can also take an array for much more validation
    required: true,
  },
},
{
  timestamps: true
}

);

//.model() takes two arguments - Kya model banau and kiske basis par banau
export const User = mongoose.model('User', userSchema);

//whatever name is given in the moongose inside "" (for example User here) gets converted into lowercase and plural form in the actual database (here in DB, it will become "users")


// By adding timmestamps: true as a second object inside the Schema, we are asking the mongoose to include createdAt and updatedAt field in our data