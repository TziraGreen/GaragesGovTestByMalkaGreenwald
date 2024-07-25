import mongoose, { Mongoose } from 'mongoose';
import { GarageModel } from './garages.model';
import { initializeGarages } from './garages.model';

// Define db
const db = {
  mongoose: mongoose,
  url: 'mongodb://localhost:27017/garages_db',
  garages:initializeGarages(mongoose) as GarageModel
};

export default db;

