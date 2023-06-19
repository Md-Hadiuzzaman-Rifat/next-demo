import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGOS);
    // console.log("connection done");
    
  } catch (error) {
    throw new Error("Connection Failed.");
  }
};
export default connect
