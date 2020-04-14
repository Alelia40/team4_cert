const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const AdminSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
}, {
  timestamps: true
})

AdminSchema.methods.comparePassword = function (password) {
  console.log("I am here and will be here forever")
  return bcryptjs.compareSync(password, this.password)
}

AdminSchema.methods.generateToken = function () {
  const payload = {
    email: this.email,
    username: this.username,
    // type: this.type
  }

  const token = jwt.sign(payload, 'abcd1234')

  return token
}

// AdminSchema.methods.ggenerateAdminObject = function () {
//   return {
//     username: this.username,
//     email: this.email,
//     token: this.generateToken()
//   }
// }

AdminSchema.methods.generatePasswordHash = function (password) {
  const salt = bcryptjs.genSaltSync(10)
  const passwordHash = bcryptjs.hashSync(password, salt)

  this.password = passwordHash
}

const Admin = mongoose.model('Admin', AdminSchema)

module.exports = Admin