import mongoose, { Mongoose } from 'mongoose';
import { Db } from './garages.model'; // Define types as per your project structure
import { GarageModel } from './garages.model'; // Assuming you have a type for your model
import { initializeGarages } from './garages.model';
const url: string = 'mongodb://localhost:27017/garages_db';
const db = {
  mongoose: mongoose,
  url: 'mongodb://localhost:27017/garages_db', // Update with your MongoDB connection string
  // Other model properties
  garages:initializeGarages(mongoose) as GarageModel
};
// const db: Db = {} as Db;
// db.mongoose = mongoose as Mongoose;
// db.url = url;

// Import your model file directly and use it to initialize garages

// db.garages = initializeGarages(mongoose) as GarageModel;

export default db;



// import mongoose, { Mongoose } from 'mongoose';
// import { Db } from './garages.model'; // Define types as per your project structure

// const url:string='mongodb://localhost:27017/garages_db'

// const db: Db = {} as Db;
// db.mongoose = mongoose as Mongoose;
// db.url = url;
// db.garages = require("./garages.model")(mongoose); // Assume TypeScript file extension for tutorial model

// export default db;

