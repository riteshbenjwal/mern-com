const mongoose = require("moongose");
const Schema = mongoose.Schema;

const categorySchema = new Schema(
  {
    naem: {
      type: String,
      trim: true,
      required: true,
      maxLength: 32,
      unique: true,
    },
  },
  { timeStamps: true }
);

module.exports = mongoose.model("Category", categorySchema);
