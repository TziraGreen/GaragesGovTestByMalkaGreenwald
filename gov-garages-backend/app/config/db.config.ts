import db from "../models/index";

//Connect to mongoDB
export const connectDB = async() => {
  db.mongoose
    .connect(db.url)
    .then(() => {
      console.log("Connected to the database! ", db.url);
    })
    .catch((err: Error) => {
      console.log("Cannot connect to the database!", err);
    });
  db.mongoose.set("strictQuery", true);
};
