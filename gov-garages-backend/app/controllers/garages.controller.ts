import axios from "axios";
import { Garage } from "../models/garages.model";

export const fetchDataGov = async (): Promise<void> => {
  try {
    const response = await axios.get(
      "https://data.gov.il/api/3/action/datastore_search?resource_id=bb68386a-a331-4bbc-b668-bba2766d517d&limit=5"
    );
    const garagasData = response.data.result.records;
    return garagasData;
  } catch (error) {
    console.error("Error fetching and saving data:", error);
    throw new Error("An error occurred while fetching data");
  }
};

export const addGaragesToDB = async (req: any): Promise<any> => {
  try {
    const uniqueObjects = [];
    for (const obj of req) {
      const existingGarage = await Garage.findOne({ _id: obj._id });
      if (!existingGarage) {
        uniqueObjects.push(obj);
      }
    }
    if (uniqueObjects.length === 0) {
      return [];
    }
    const insertGarages = await Garage.insertMany(uniqueObjects);    
    return insertGarages;
  } catch (err: any) {
    console.error("Error fetching and saving data:", err);
    throw new Error("An error occurred while fetching data");
  }
};

export const getGaragesFromDB = async (): Promise<any> => {
  try {
    const getGarages = await Garage.find();
    return getGarages;
  } catch (err: any) {
    console.error("Error fetching and saving data:", err);
    throw new Error("An error occurred while fetching data");
  }
};
