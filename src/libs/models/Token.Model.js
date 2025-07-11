const mongoose = require("mongoose")

const tokenSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
});

const Token = mongoose.models.Token || mongoose.model("Token", tokenSchema);

module.exports = Token;