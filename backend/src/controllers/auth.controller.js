import UserModel from '../models/user.model.js';
import jwt from 'jsonwebtoken';


// generate jwt token 
const generateToken = (id) => {
  return jwt.sign({ id },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );
};

// register user 
const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if(!username || !email || !password){
      return res.status(400).json({
        message: "All fields are required."
      })
    }

    const userExists = await UserModel.findOne({ email });

    if(userExists){
      return res.status(400).json({
        message: "User already exists",
      });
    }


    const user = await UserModel.create({
      username,
      email,
      password
    });

    return res.status(201).json({
      message: "User registered successfully",
      _id: user._id,
      username: user.username,
      email: user.email,
      token: generateToken(user._id),
    })

  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}

// login 
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if(!email || !password){
      return res.status(400).json({
        message: "All fields are required."
      });
    }
    
    const user = await UserModel.findOne({ email }).select("+password");
    if(!user || !(await user.matchPassword(password))){
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }
    
    res.status(201).json({
      message: "User logged In",
      _id: user._id,
      username: user.username,
      email: user.email,
      token: generateToken(user._id),
    })

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

// logout 

export default {
  register,
  login,
  // logout,
}