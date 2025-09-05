const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
   image: {
    url: {
      type: String,
      default: "https://images.unsplash.com/photo-1663790682196-926e224c50a7...",
      set: v => v === "" ? "https://images.unsplash.com/photo-1663790682196-926e224c50a7..." : v
    },
    filename: String
  },
    description: String,
    price: Number,
    location: String,
    country: String
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;