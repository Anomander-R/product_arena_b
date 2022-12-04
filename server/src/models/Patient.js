import mongoose from "mongoose";

const PatientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    minLength: [2, "Name must be at least 6 characters"],
    maxLength: [20, "Name must be less than 20 characters"],
  },
  image: {
    type: String,
    default: "noimg.jpg",
  },
  appointmentTime: {
    type: Date,
    required: [true, "Appointment time is required"],
  },
  appointmentReason: {
    type: String,
    required: [true, "Appointment reason is required"],
    minLength: [2, "Appointment reason must be at least 6 characters"],
    maxLength: [20, "Appointment reason must be less than 20 characters"],
  },
});

export default mongoose.model("Patient", PatientSchema);
