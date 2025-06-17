import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  barcode: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  description: String,
  brand: String,
  origin: {
    country: String,
    region: String,
    coordinates: String
  },
  ingredients: [String],
  sustainabilityData: {
    carbonFootprint: Number,
    ethicalRating: Number,
    recyclable: Boolean
  },
  manufacturingDate: Date,
  expiryDate: Date,
  qrCode: String,
  image: { type: String },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Product = mongoose.model('Product', productSchema);
export default Product;
