import User from "../models/userModel";

const userRegistration = async (req, res) => {
  try {
    const { name, email } = req.body;
    console.log(name);
  } catch (err) {
    res.status(500).json({ error: "Internal Server error" });
  }
};
