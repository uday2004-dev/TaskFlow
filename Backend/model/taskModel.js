import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    priority: {
        type: String,
        enum: ["low", "medium", "high"],
        required:true
    }
},
    {
        timestamps: true,

    })

export const Tasks = mongoose.model("Task", taskSchema)



// import mongoose, { Schema } from "mongoose";

// const blogsSchema = mongoose.Schema({
//     picture: {
//         type:[String] ,
//     },
//     title: {
//         type: String,
//         required: true,
//         unique: true,
//     },
//     services: {
//         type: Schema.Types.ObjectId,
//         ref: "Service",
//         required: true,
//     },
//     description: {
//         type: String,
//         required: true,
//     },
//     heading: {
//         type: String,
//         required: true,
//     },
//     slug: {
//     type: String,
//     required: true,
//     unique: true,
// }
// },
//     {
//         timestamps: true,
//     }
// )

// export const Blogs=mongoose.model("Blogs",blogsSchema)