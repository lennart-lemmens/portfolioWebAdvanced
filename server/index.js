import express from "express";
import cors from "cors";
import gamesRouter from "./routes/games.js";
import listsRouter from "./routes/lists.js";

const app = express();
const corsOptions = {
    origin: ["http://localhost:5173"]
};
const port = 8080;

app.use(express.json());
app.use(cors(corsOptions));

// Routers
app.use("/games", gamesRouter);
app.use("/lists", listsRouter);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});