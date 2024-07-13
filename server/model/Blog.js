// const mongoose = require("mongoose");

// const Schema = mongoose.Schema;

// const blogSchema = new Schema({
//     title : {
//         type: String,
//         required: true,
//     },
//     desc :  {
//         type: String,
//         required: true,
//     },
//     img :  {
//         type: String,
//         required: true,
//     },
//     user : {
//         type: mongoose.Types.ObjectId,
//         ref:"User",
//         required: true,
//     },
//     date: {
//         type: Date, 
//         default: Date.now, 
//     },
// })

// module.exports =  mongoose.model("Blog", blogSchema);


const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100,
  },
  desc: {
    type: String,
    required: true,
    maxlength: 1000,
  },
  img: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^https?:\/\/\S+$/.test(v);
      },
      message: (props) => `${props.value} is not a valid URL!`,
    },
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
    index: true,
  },
  date: {
    type: Date,
    default: Date.now,
    index: true,
  },
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
