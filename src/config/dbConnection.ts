import mongoose from "mongoose";

const dbConnection = () => {
    mongoose
        .connect(process.env.DATABASE_CONNECTION as string)
        .then((_res) => {
            console.info("Database Connected");
        })
        .catch((err) => console.error(err));
};

export default dbConnection;