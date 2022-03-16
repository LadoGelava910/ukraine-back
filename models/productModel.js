const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    product_id: {
      type: String,
      unique: true,
      trim: true,
      required: true,
    },
    title: {
      type: String,

      trim: true,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      trim: true,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    startLocation: {
      type: String,
      required: true,
    },

    content: {
      type: String,
      required: true,
    },

    images: {
      type: Object,
    },

    // checked:{
    //     type: Boolean,
    //     default: false
    // },
    // sold:{
    //     type: Number,
    //     default: 0
    // }
  },
  {
    timestamps: true, //important
  }
);

module.exports = mongoose.model("Products", productSchema);
