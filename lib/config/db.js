import mongoose from "mongoose";

export const ConnectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://tarichiali:qb3pndjbWYCUWIri@cluster0.qjx3w.mongodb.net/blogger",
    console.log("DB Connected")
  );
};
