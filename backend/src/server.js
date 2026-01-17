import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();
//console.log(process.env.MONGO_URI);

const app = express(); //expressFunc().("/route",(request,response) => {})
const PORT = process.env.PORT || 5001;

connectDB();

//middleware
app.use(express.json());

//Endpoint: it is a combination of a URL + HTTP method that lets the client interact with a specific resource
//routes
app.use("/api/notes", notesRoutes); //if u send a request to /api/routes, its gonna hit the router in notesRouter.js

app.listen(PORT, () => {
  console.log("Server started on PORT:", PORT);
});
