import express from "express";
import { requestData } from "../controllers/requestData.js";

const listsRouter = express.Router();

// Request data from API to fill lists in nav bar
listsRouter.post("/:endpoint", async (req, res) => {
    requestData(req.params.endpoint, `fields name; sort name asc; limit ${req.query.limit};`)
    .then(data => res.send(data));
});

export default listsRouter;