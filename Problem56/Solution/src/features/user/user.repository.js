// Please don't change the pre-written code
// Import the necessary modules here
import { userSchema } from "./user.schema.js";
import {compareHashedPassword , hashPassword} from "../../utils/hashPassword.js" 
import mongoose from "mongoose";

const userModel = mongoose.model("User" , userSchema);

export const userRegisterationRepo = async (userData) => {
  // Write your code here
  try {
    const user = new userModel(userData);
    await user.save();
    return {success : true , res : user};
  } catch (error) {
    return {success : false , error : {statusCode : 400 , msg : error}};
  }
};
export const userLoginRepo = async (userData) => {
  // Write your code here
  try {
    const { email, password } = userData;
    const user = await userModel.findOne({ email });
    if (!user) {
      return {
        success: false,
        error: { statusCode: 404, msg: "user not found" },
      };
    } else {
      let passwordValidation = await compareHashedPassword(
        password,
        user.password
      );
      if (passwordValidation) {
        return { success: true, res: user };
      } else {
        return {
          success: false,
          error: { statusCode: 400, msg: "invalid credentials" },
        };
      }
    }
  } catch (error) {
    return {
      success: false,
      error: { statusCode: 400, msg: error },
    };
  }
};


export const updateUserPasswordRepo = async (_id, newpassword, next) => {
  // Write your code here
  try {
    const user = await userModel.findOne({ _id });
    if (!user) {
      return {
        success: false,
        error: { statusCode: 404, msg: "user not found" },
      };
    } else {
      const newHashedPassword = await hashPassword(newpassword, next);
      user.password = newHashedPassword;
      let updatedUser = await user.save();
      return { success: true, res: updatedUser };
    }
  } catch (error) {
    return {
      success: false,
      error: { statusCode: 400, msg: error },
    };
  }
};
