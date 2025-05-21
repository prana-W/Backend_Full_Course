import mongoose from 'mongoose'

//! Here we will be making mini-models for our orderItems Schema

//* We could have made a seperate file for this schema and imported in here, but since this schema doesn't have any use case other than inside our orderSchema, therefoew, we didn't do that for the sake of simplicity

//It contains productId and quantity of each indivisual product, which will be used a Schema for our orderSchema
// (which has the schema for our total order)
const orderItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    }
})

const orderSchema = new mongoose.Schema({
    orderPrice: {
        type: Number,
        required: true
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    //orderItems is an array of orderItemSchema
    orderItems: {
        type: [orderItemSchema],

        //! Below is also a correct way of doing it... One another way was discussed in todo.model.js in subTodo Schema. There we simply add an array inside which we put our schema structure of each element of the array. Here we have made type as an array, inside which we wrote our schema for its element.

        /*
                type: [
                    {
                        productId: {
                            type: mongoose.Schema.Types.ObjectId,
                            ref: 'Product',
                            required: true,
                        },
                        quantity: {
                            type: Number,
                            required: true,
                        }
                    }
                ]

        */
    },
    address: {
        type: String,
        required: true
    },

    //! Below is when we want to choose between few choices
    status: {
        type: String,
        enum: ["PENDING", "COMPLETED", "Delivered"],
        default: "PENDING",

    }


}, {timestamps: true})

export const order = mongoose.model('Order', orderSchema)