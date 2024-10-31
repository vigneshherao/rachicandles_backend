const validator = require("validator");

const productValidate = (req) => {
  const { title, subtitle, price, description } = req.body;

  if (!title || title.trim().length === 0 || title.length < 5) {
    throw new Error(
      "Title should be a valid string with at least 5 characters."
    );
  }

  if (!subtitle || subtitle.trim().length === 0 || subtitle.length < 5) {
    throw new Error(
      "Subtitle should be a valid string with at least 5 characters."
    );
  }

  if (
    !description ||
    description.trim().length === 0 ||
    description.length < 20
  ) {
    throw new Error(
      "Description should be a valid string with at least 50 characters."
    );
  }

  if (!price) {
    throw new Error("Price should be a valid .");
  }

  const allowedFields = [
    "title",
    "subtitle",
    "price",
    "image",
    "description",
    "category",
  ];

  const isAllowed = Object.keys(req.body).every((key) =>
    allowedFields.includes(key)
  );

  if (!isAllowed) {
    throw new Error("Only allowed field are inserted");
  }
};

const validateEdit = (req) => {
  const allowedFields = ["title", "subtitle", "price", "description"];

  const isAllowed = Object.keys(req.body).every((key) =>
    allowedFields.includes(key)
  );

  if (!isAllowed) {
    throw new Error("Only allowed field are allowed to edit");
  }
};

module.exports = { productValidate, validateEdit };
