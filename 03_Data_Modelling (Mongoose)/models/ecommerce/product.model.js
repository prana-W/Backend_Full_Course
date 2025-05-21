import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    // Store the link of image
    productImage: {
        type: String,
    },
    price: {
        type: Number,
        default: 0,
        required: true
    },
    stock: {
        type: Number,
        default: 0,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    ownership: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

}, {timestamps: true});

export const Product = mongoose.model('Product', productSchema);