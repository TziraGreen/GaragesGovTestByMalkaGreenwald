import db from "../models/index";

export const connectDB = async() => {
  db.mongoose
    .connect(db.url)
    .then(() => {
      console.log("Connected to the database! ", db.url);
    })
    .catch((err: Error) => {
      console.log("Cannot connect to the database!", err);
    //   process.exit(1);
    });
  db.mongoose.set("strictQuery", true);
};
