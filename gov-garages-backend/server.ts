import express, { Request, Response, Application } from "express";
import dotenv from "dotenv";
const cors = require("cors");
import routes from "./app/routes/garages.routes";
import { connectDB } from "./app/config/db.config";

dotenv.config();

const app: Application = express();

const PORT = process.env.PORT || 8000;

var corsOptions = {
  origin: "http://localhost:4200",
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/garages", routes);

connectDB();

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Express & TypeScript Server");
});


app.listen(PORT, () => {
  console.log(`Server is Fire at http://localhost:${PORT}`);
});

export default app;
