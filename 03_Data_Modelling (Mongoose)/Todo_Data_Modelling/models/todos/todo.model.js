import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      //Below (mongoose.Schema.Types.ObjectId) tell mongoose, that we will be passsing reference of any other model. It is compulsory to pass ref after this.
      //ref should be whatever we passed as the first parameter in export statement (i.e. jo ham model banana chaha rhe hai)
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },

    //Below means subTodos has a type Array i.e. array of sub-todos
    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId
        ref: 'SubTodo'
      }
    ]
  
  },
  { timestamps: true }
);

export const Todo = mongoose.model('Todo', todoSchema);
//The above will be stored in the DB as "todos"
