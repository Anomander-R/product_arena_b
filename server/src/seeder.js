import fs from "fs";
import mongoose from "mongoose";
import colors from "colors";
import config from "./config/config";

// Load models
import User from "./models/User";
import Patient from "./models/Patient";

// Connect to DB
mongoose.connect(config.MONGO_URI);

// Read JSON files

const users = JSON.parse(
  fs.readFileSync(`${__dirname}\\_data\\users.json`, "utf-8")
);

const patients = JSON.parse(
  fs.readFileSync(`${__dirname}\\_data\\patients.json`, "utf-8")
);

// Import into DB
const importData = async () => {
  try {
    await User.create(users);
    await Patient.create(patients);
    console.log("Data Imported...".green.inverse);
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

// Delete data
const deleteData = async () => {
  try {
    await User.deleteMany();
    await Patient.deleteMany();
    console.log("Data Destroyed...".red.inverse);
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

//deleteData();
importData();
