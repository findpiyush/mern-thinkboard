import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();
//console.log(process.env.MONGO_URI);

const app = express(); //expressFunc().("/route",(request,response) => {})
const PORT = process.env.PORT || 5001;

//middleware: this will parse the JSON bodies from postman/database

app.use(
  //cors should be before rate limiter
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json()); // allowes us to access req.body in routes and controllers
app.use(rateLimiter);

/*  our simple custom middleware

app.use((req, res, next) => {
  console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
  next();
});

*/

//Endpoint: it is a combination of a URL + HTTP method that lets the client interact with a specific resource
//routes
app.use("/api/notes", notesRoutes); //if u send a request to /api/routes, its gonna hit the router in notesRouter.js

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server started on PORT:", PORT);
  });
});
