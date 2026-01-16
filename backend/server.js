import express from "express";
//const express = require("express");

const app = express(); //expressFunc().("/route",(request,response) => {})

//Endpoint: it is a combination of a URL + HTTP method that lets the client interact with a specific resource
//routes
app.get("/api/notes", (req, res) => {
  res.send("you got 10 notes");
});

//user wants to create note
app.post("/api/notes", (req, res) => {
  res.status(201).json({ message: "Note created succesfully" });
});

//update note   :id means we are declaring it as dynamic
app.put("/api/notes/:id", (req, res) => {
  res.status(200).json({ message: "Note updated succesfully" });
});

app.delete("/api/notes/:id", (req, res) => {
  res.status(200).json({ message: "Note deleted succesfully" });
});

app.listen(5001, () => {
  console.log("Server started on PORT:5001");
});
