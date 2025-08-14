// server/src/db.js
import mongoose from "mongoose";

export async function connectDB(uri) {
  mongoose.set("strictQuery", true);
  await mongoose.connect(uri, { dbName: "eternal_may" });
  return mongoose.connection;
}

function applyToJSON(schema) {
  schema.set("toJSON", {
    virtuals: true,
    versionKey: false, // убираем __v
    transform(_doc, ret) {
      ret.id = ret._id.toString();
      delete ret._id;
      return ret;
    }
  });
}

const UserSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  passwordHash: { type: String, required: true },
  role: { type: String, enum: ["admin", "user"], default: "admin" },
}, { timestamps: true });

const EventSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  date: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String },
  tags: { type: [String], default: [] },
  color: { type: String },
  imageData: { type: String },
}, { timestamps: true });

applyToJSON(UserSchema);
applyToJSON(EventSchema);

export const User = mongoose.model("User", UserSchema);
export const Event = mongoose.model("Event", EventSchema);
