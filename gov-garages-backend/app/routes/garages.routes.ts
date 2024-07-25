import express from "express";
import {
  addGaragesToDB,
  fetchDataGov,
  getGaragesFromDB,
} from "../controllers/garages.controller";

const router = express.Router();

router.get("/fetchDataGov", async (req, res) => {
  try {
    const govGaragesData = await fetchDataGov();
    res.send(govGaragesData);
  } catch (error) {
    res.status(500).send("An error occurred");
  }
});

router.put("/addGarages", async (req, res) => {
  try {
    const addGaragesData = await addGaragesToDB(req.body);
    res.send(addGaragesData);
  } catch (error) {
    res.status(500).send("An error occurred");
  }
});

router.get("/getGarages", async (req, res) => {
  try {
    const getGaragesData = await getGaragesFromDB();
    res.send(getGaragesData);
  } catch (error) {
    res.status(500).send("An error occurred");
  }
});

export default router;

// import express from 'express';
// import { Router } from 'express';
// import * as tutorialsController from '../controllers/garages.controller';

// const router: Router = express.Router();

// // Create a new Tutorial
// router.post("/", tutorialsController.create);

// // Retrieve all Tutorials
// router.get("/", tutorialsController.findAll);

// // Retrieve all published Tutorials
// router.get("/published", tutorialsController.findAllPublished);

// // Retrieve a single Tutorial with id
// router.get("/:id", tutorialsController.findOne);

// // Update a Tutorial with id
// router.put("/:id", tutorialsController.update);

// // Delete a Tutorial with id
// router.delete("/:id", tutorialsController.remove);

// // Delete all Tutorials
// router.delete("/", tutorialsController.removeAll);

// export default (app: express.Application): void => {
//   app.use("/api/tutorials", router);
// };
