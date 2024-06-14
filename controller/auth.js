import User from "../modals/user.js";
import bycrypt from "bcrypt";

const register = async (req,res) => {
    try{
        const { name, email, password } = req.body;
        if(!name || !email || !password) {
            return res.status(400).json({message: "All fields are required"});
        }

        const hashPassword = await bycrypt.hash(password, 10);
        const user = await User.create({name, email, password: hashPassword});
        return res.status(201).json({data: user});

    }catch(err){
        console.log(err);
        res.status(500).json({message: "Internal server error"});
    }
}


const login = async (req,res) => {
    try{
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if(!user){
            return res.status(400).json({message: "Invalid userId"});
        }

        const isMatch = await bycrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({message: "Invalid password"});
        }
        req.session.user = user;
        return res.status(200).json({message: "Login success"});
    }catch(err){
        console.log(err);
        res.status(500).json({message: "Internal server error"});
    }
    
}

export {
    register,
    login
}