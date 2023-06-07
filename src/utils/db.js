import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.Mongoose);
  } catch (error) {
    throw new Error("Connection Failed.");
  }
};
export default connect