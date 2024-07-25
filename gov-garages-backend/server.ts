import express, { Request, Response , Application } from 'express';
import dotenv from 'dotenv';
const cors = require("cors");
import routes from './app/routes/garages.routes';
import { connectDB } from './app/config/db.config';

//For env File 
dotenv.config();

const app: Application = express();

const PORT = process.env.PORT || 8000;

var corsOptions = {
  origin: "http://localhost:4200"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

connectDB();

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Express & TypeScript Server');
});

app.use('/api/garages', routes);


app.listen(PORT, () => {
  console.log(`Server is Fire at http://localhost:${PORT}`);
});

export default app;





