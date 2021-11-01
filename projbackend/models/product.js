const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    maxLength: 32,
  },

  description: {
    type: String,
    trim: true,
    required: true,
    maxLength: 1000,
  },

  price: {
    type: Number,
    required: true,
    maxLength: 32,
    trim: true,
  },

  category: {
    type: ObjectId,
    ref: "Category", // referencer from Category model
    required: true,
  },

  stock: {
    type: Number,
  },

  sold: {
    type: Number,
    default: 0,
  },

  photo: {
    data: Buffer,
    contentType: String,
  },
});

module.export = mongoose.model("Product", productSchema);
