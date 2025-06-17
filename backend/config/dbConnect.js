import mongoose from "mongoose";

const dbConnect = async () => {
  const connection = await mongoose.connect(process.env.DB_CONNECTION_STRING);
  return connection;
};

export default dbConnect;
