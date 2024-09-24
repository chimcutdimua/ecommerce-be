const User = require("../models/user");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const registerUserService = async (
  firstname,
  lastname,
  email,
  mobile,
  password
) => {
  if (!firstname || !lastname || !email || !password || !mobile) {
    return "All fields are required";
  }
  try {
    const user = await User.findOne({ $or: [{ email }, { mobile }] });
    if (user) {
      return "Email or mobile already exists";
    }
    const hashPassword = await bcrypt.hash(password, saltRounds);
    let result = await User.create({
      firstname,
      lastname,
      email,
      mobile,
      password: hashPassword,
    });
    return result;
  } catch (error) {
    console.error("Error registering user:", error);
    return "An error occurred while registering the user";
  }
};

module.exports = {
  registerUserService,
};
