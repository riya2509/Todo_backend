import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import appRouter from "./app/Routes/appRouter.js";

const app = express();
const PORT = 5000;
// middleware

app.use(express.json());
app.use("/api", appRouter);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "./dist")));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./dist", "index.html"));
});

// Comes at last
app.listen(PORT, () =>
  console.log(
    `Server started at ${new Date().toLocaleString()} on port ${PORT}`
  )
);
