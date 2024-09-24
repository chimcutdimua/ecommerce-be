const { registerUserService } = require("../services/user");

const registerUser = async (req, res) => {
  const { firstname, lastname, email, mobile, password } = req.body;
  const data = await registerUserService(
    firstname,
    lastname,
    email,
    mobile,
    password
  );
  return res.status(200).json(data);
};

module.exports = {
  registerUser,
};
