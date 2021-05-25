require('dotenv').config();
const mongoose = require("mongoose");
const { Friend } = require("../models");
// This file empties the Books collection and inserts the books below
mongoose.connect(process.env.MONGODB_URI ||
  "mongodb://localhost/proj3");
const seed = [
 {
   name: "ptums",
 },
 {
   name: "ernesto"
 }
];
Friend.insertMany(seed).then(() => {
   console.log("Friend were added");
});