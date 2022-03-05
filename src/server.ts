/* eslint-disable no-console */
import express from "express";

const app = express();

app.get("/", (request, response) => response.json({ message: "heloworld" }));
app.listen(3333, () => console.log("oi"));
