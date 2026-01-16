import express from "express";
import notesRoutes from "./routes/notesRoutes.js";

const app = express(); //expressFunc().("/route",(request,response) => {})

//Endpoint: it is a combination of a URL + HTTP method that lets the client interact with a specific resource
//routes

app.use("/api/notes", notesRoutes); //if u send a request to /api/routes, its gonna hit the router in notesRouter.js

app.listen(5001, () => {
  console.log("Server started on PORT:5001");
});
