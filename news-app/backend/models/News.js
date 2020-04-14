let mongoose = require('mongoose');
let Schema = mongoose.Schema;

//News schema definition
let NewsSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    publishedAt: { type: Date, default: Date.now },    
  }, 
  { 
    versionKey: false
  }
);

// Sets the publishedAt parameter equal to the current time
NewsSchema.pre('save', next => {
  now = new Date();
  if(!this.publishedAt) {
    this.publishedAt = now;
  }
  next();
});

//Exports the NewsSchema for use elsewhere.
module.exports = mongoose.model('News', NewsSchema);