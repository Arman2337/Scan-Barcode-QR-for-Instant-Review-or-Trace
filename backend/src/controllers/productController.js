// import Product from '../models/product.js';
// import asyncHandler from 'express-async-handler';

// export const getProductByCode = asyncHandler(async (req, res) => {
//   const product = await Product.findOne({
//     $or: [
//       { barcode: req.params.code },
//       { qrCode: req.params.code }
//     ]
//   });

//   if (!product) {
//     res.status(404);
//     throw new Error('Product not found');
//   }

//   res.json(product);
// });

// export const createProduct = asyncHandler(async (req, res) => {
//   const {
//     barcode,
//     name,
//     description,
//     brand,
//     origin,
//     ingredients,
//     sustainabilityData,
//     manufacturingDate,
//     expiryDate,
//     qrCode,
//     images
//   } = req.body;

//   const product = await Product.create({
//     barcode,
//     name,
//     description,
//     brand,
//     origin,
//     ingredients,
//     sustainabilityData,
//     manufacturingDate,
//     expiryDate,
//     qrCode,
//     images
//   });

//   res.status(201).json(product);
// });

// export const getAllProducts = asyncHandler(async (req, res) => {
//   const products = await Product.find(); // fetch all products from DB
//   res.status(200).json(products);
// });



import Product from '../models/product.js';
import asyncHandler from 'express-async-handler';
import axios from 'axios';

export const getProductByCode = asyncHandler(async (req, res) => {
  const code = req.params.code;

  // Step 1: Search in local DB
  const product = await Product.findOne({
    $or: [
      { barcode: code },
      { qrCode: code }
    ]
  });

  if (product) {
    return res.status(200).json(product);
  }

  // Step 2: Fallback to external APIs
  let externalProduct = null;

  // --- Fallback 1: OpenFoodFacts ---
  try {
    const offRes = await axios.get(`https://world.openfoodfacts.org/api/v0/product/${code}.json`);
    if (offRes.data && offRes.data.status === 1) {
      const p = offRes.data.product;
      externalProduct = {
        name: p.product_name || 'Unknown',
        brand: p.brands || 'Unknown',
        origin: p.countries || 'Unknown',
        description: p.generic_name || 'No description available',
        barcode: code,
        ingredients: p.ingredients_text || 'N/A',
        sustainabilityData: 'Not Available',
        manufacturingDate: 'N/A',
        expiryDate: 'N/A',
        qrCode: null,
        images: [p.image_url || ''],
        source: 'OpenFoodFacts'
      };
    }
  } catch (err) {
    console.error('OpenFoodFacts failed:', err.message);
  }

  // --- Fallback 2: UPCitemDB ---
  if (!externalProduct) {
    try {
      const upcRes = await axios.get(`https://api.upcitemdb.com/prod/trial/lookup?upc=${code}`);
      const items = upcRes.data?.items;
      if (items && items.length > 0) {
        const item = items[0];
        externalProduct = {
          name: item.title || 'Unknown',
          brand: item.brand || 'Unknown',
          origin: 'N/A',
          description: item.description || 'No description',
          barcode: code,
          ingredients: 'N/A',
          sustainabilityData: 'Not Available',
          manufacturingDate: 'N/A',
          expiryDate: 'N/A',
          qrCode: null,
          images: item.images || [],
          source: 'UPCitemDB'
        };
      }
    } catch (err) {
      console.error('UPCitemDB failed:', err.message);
    }
  }

  // --- Fallback 3: Barcode Lookup API (RapidAPI) ---
if (!externalProduct) {
  try {
    const options = {
      method: 'GET',
      url: 'https://barcodes-lookup.p.rapidapi.com/',
      params: { barcode: code },
      headers: {
        'X-RapidAPI-Key': '720a59e0e8mshff11786c54b7e50p1a87b7jsn496518d5b0cd',
        'X-RapidAPI-Host': 'barcodes-lookup.p.rapidapi.com'
      }
    };

    const barcodeRes = await axios.request(options);
    const item = barcodeRes.data?.product;

    if (item) {
      externalProduct = {
        name: item.name || 'Unknown',
        brand: item.brand || item.manufacturer || 'Unknown',
        origin: item.country || 'N/A',
        description: item.description || 'No description',
        barcode: item.barcode_number || code,
        ingredients: item.ingredients || 'N/A',
        sustainabilityData: 'Not Available',
        manufacturingDate: 'N/A',
        expiryDate: 'N/A',
        qrCode: null,
        images: item.images || [],
        source: 'Barcode Lookup'
      };
    }
  } catch (err) {
    console.error('Barcode Lookup API failed:', err.message);
  }
}


  // Final response
  if (externalProduct) {
    return res.status(200).json(externalProduct);
  } else {
    res.status(404).json({ message: 'Product not found in DB or external APIs' });
  }
});

export const createProduct = asyncHandler(async (req, res) => {
  const {
    barcode,
    name,
    description,
    brand,
    origin,
    ingredients,
    sustainabilityData,
    manufacturingDate,
    expiryDate,
    qrCode,
    images
  } = req.body;

  const product = await Product.create({
    barcode,
    name,
    description,
    brand,
    origin,
    ingredients,
    sustainabilityData,
    manufacturingDate,
    expiryDate,
    qrCode,
    images
  });

  res.status(201).json(product);
});

export const getAllProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();
  res.status(200).json(products);
});


export const updateProduct = asyncHandler(async (req, res) => {
  const { name, brand, barcode, sustainability, image } = req.body;

  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(404);
    throw new Error('Product not found');
  }

  // ✅ Update fields (including image)
  product.name = name || product.name;
  product.brand = brand || product.brand;
  product.barcode = barcode || product.barcode;
  product.sustainability = sustainability || product.sustainability;
  product.image = image || product.image; // ✅ Make sure image is updated

  const updatedProduct = await product.save();

  res.json(updatedProduct);
});


export const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(404);
    throw new Error('Product not found');
  }

  await product.remove();

  res.json({ message: 'Product deleted successfully' });
});