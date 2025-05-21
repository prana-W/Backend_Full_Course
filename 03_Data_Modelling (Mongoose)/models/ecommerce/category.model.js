import mongoose from "mongoose"

const categorySchema = new mongoose.Schema(
    {

        name: {
            type: String,
            required: true,
        },
        units: {
            type: Number,
            required: true,
        }

    },
    {timestamps: true}
)

export const Category = mongoose.model('Category', categorySchema);

// If we put the name as categories here itself, then in the DB, there won't be any change in the name, as the name
// will already be in lowercase and plural