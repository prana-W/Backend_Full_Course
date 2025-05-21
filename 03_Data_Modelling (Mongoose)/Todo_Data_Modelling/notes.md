# How to do Data Modelling

- Doing data modelling is very difficult directly in MongoDB. Therefore, we have used mongoose.

Mongoose is a MongoDB Object Data Modeling (ODM) library used for Node.js applications. It simplifies working with MongoDB by providing a schema-based approach to model application data, offering features like type casting, validation, and query building. 

- Do `npm i mongoose`
- Then make a `models` directory inside which we make structure of all the data.
- Inside this we will have models of each things

We create all the model. For relation with different models, check todo.model.js