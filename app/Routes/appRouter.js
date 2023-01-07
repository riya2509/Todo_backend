import express from "express";
import appController from "../Controller/appController.js";

const appRouter = express.Router();

appRouter.get("/data", appController.getAllData);
appRouter.post("/create", appController.createData);
appRouter.delete("/delete", appController.deleteData);
appRouter.put("/update", appController.updateData);

export default appRouter;
