import { Schema, model, models, Document } from "mongoose";

export interface IImage extends Document {
  title: string;
  transformationType: string;
  publicId: string;
  secureUrl: string;
  width?: number;
  height?: number;
  config?: Record<string, any>; // Using a generic object type
  transformationUrl?: string;
  aspectRatio?: string;
  color?: string;
  prompt?: string;
  author?: Schema.Types.ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
}

const ImageSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  transformationType: {
    type: String,
    required: [true, "Transformation type is required"],
  },
  publicId: {
    type: String,
    required: [true, "Public id is required"],
  },
  secureUrl: {
    type: URL,
    required: [true, "Secure url is required"],
  },
  width: { type: Number },
  height: { type: Number },
  config: { type: Object },
  transformationUrl: { type: String },
  aspectRatio: { type: String },
  color: { type: String },
  prompt: { type: String },
  author: { type: Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Image = models?.Image || model<IImage>("Image", ImageSchema);
export default Image;
