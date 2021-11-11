const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const { ObjectId } = Schema;

const ProductCartSchema = new Schema({
  product: {
    type: ObjectId,
    ref: "Product",
  },

  name: String,
  count: Number,
  price: Number,
});
const ProductCart = mongoose.model("ProductCart", ProductCartSchema);

const OrderSchema = new Schema(
  {
    products: [ProductCartSchema],
    transaction_id: {},
    amount: { type: Number },
    address: String,
    status: {
      type: String,
      default: "Not Delivered",
      enum: ["Cancelled", "Delivered", "Shipped", "Processing", "Recieved"],
    },
    updated: Date,
    user: {
      type: ObjectId,
      ref: "User",
    },
  },
  { timeStamps: true }
);

const Order = mongoose.model("Order", OrderSchema);

module.exports = { Order, ProductCart };
