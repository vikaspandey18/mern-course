import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String },
    password: { type: String },
    lastName: { type: String, default: "LastName" },
    location: { type: String, default: "my city" },
    role: { type: String, enum: ["admin", "user"], default: "user" },
    avatar: { type: String },
    avatarPublicId: { type: String },
  },
  {
    timestamps: true,
  }
);

UserSchema.methods.toJSON = function () {
  var obj = this.toObject();
  delete obj.password;
  return obj;
};

export default mongoose.model("User", UserSchema);
