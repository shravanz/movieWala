const mongoose = require("mongoose");
const Joi = require("joi");

//Creating a model with Mongoose Schema
const Genre = mongoose.model(
  "Genre",
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 10
    }
  })
);

//External validation using JOI npm
function validateGenre(genre) {
  const schema = {
    name: Joi.string()
      .min(5)
      .required()
  };
  return Joi.validate(genre, schema);
}
exports.Genre = Genre;
exports.validate = validateGenre;
