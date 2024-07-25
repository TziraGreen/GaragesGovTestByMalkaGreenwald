import express from "express";
import {
  addGaragesToDB,
  fetchDataGov,
  getGaragesFromDB,
} from "../controllers/garages.controller";

const router = express.Router();

//route to fetch data from gov link
router.get("/fetchDataGov", async (req, res) => {
  try {
    const govGaragesData = await fetchDataGov();
    res.send(govGaragesData);
  } catch (error) {
    res.status(500).send("An error occurred");
  }
});

//route to add garages to mongoDB
router.put("/addGarages", async (req, res) => {
  try {
    const addGaragesData = await addGaragesToDB(req.body);
    res.send(addGaragesData);
  } catch (error) {
    res.status(500).send("An error occurred");
  }
});

//route to get garages from mongoDB
router.get("/getGarages", async (req, res) => {
  try {
    const getGaragesData = await getGaragesFromDB();
    res.send(getGaragesData);
  } catch (error) {
    res.status(500).send("An error occurred");
  }
});

export default router;
