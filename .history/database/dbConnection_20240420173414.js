import mongoose from "mongoose";

const dbConnection () => {
    mongoose.connect(process.env.F)
}