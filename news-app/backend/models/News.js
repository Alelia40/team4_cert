const mongoose = require('mongoose')

//3. create a schema
const NewsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  URL: { type: String },
  imageURL: { type: String },
  category: { type: String },
  publishedAt: { type: String, required: true}
})

//4. create a model
const News = mongoose.model('News', NewsSchema)

module.exports = News