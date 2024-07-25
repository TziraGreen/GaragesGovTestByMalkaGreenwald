import mongoose, { Mongoose } from "mongoose";
import { model, Schema, Model, Document } from "mongoose";

// Declare garage type
interface GarageDocument extends Document {
  _id: number;
  mispar_mosah: number;
  shem_mosah: string;
  cod_sug_mosah: number;
  sug_mosah: string;
  ktovet: string;
  yishuv: string;
  telephone: string;
  mikud: number;
  cod_miktzoa: number;
  miktzoa: string;
  menahel_miktzoa: string;
  rasham_havarot: number;
  TESTIME: string;
}

export interface GarageModel extends Model<GarageDocument> {}

// Define garage schema
const garageSchema: Schema<GarageDocument> = new Schema<GarageDocument>(
  {
    _id: Number,
    mispar_mosah: Number,
    shem_mosah: String,
    cod_sug_mosah: Number,
    sug_mosah: String,
    ktovet: String,
    yishuv: String,
    telephone: String,
    mikud: Number,
    cod_miktzoa: Number,
    miktzoa: String,
    menahel_miktzoa: String,
    rasham_havarot: Number,
    TESTIME: String,
  },
  { timestamps: true }
);

// Export model garage
export const Garage: GarageModel = model<GarageDocument, GarageModel>(
  "garage",
  garageSchema
);

// Export a function to initialize the garages model
export function initializeGarages(mongooseInstance: Mongoose): GarageModel {
  return Garage;
}

// Declare db interface
export interface Db {
  mongoose: Mongoose;
  url: string;
  garages: GarageModel;
}
