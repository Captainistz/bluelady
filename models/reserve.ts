import mongoose from 'mongoose'

const reserveSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    unique: false,
    trim: true,
    maxlength: [25, 'Name cannot be more than 25 characters'],
  },
  phone: {
    type: String,
    required: [true, 'Please add a phone number'],
    unique: true,
    trim: true,
    index: { unique: true, sparse: true },
    maxlength: [10, 'Phone cannot be more than 10 characters'],
  },
  date: {
    type: String,
    required: [true, 'Please add a date'],
    unique: false,
    trim: true,
    maxlength: [5, 'Date cannot be more than 5 characters'],
  },
  time: {
    type: String,
    required: [true, 'Please add a time'],
    unique: false,
    trim: true,
    maxlength: [5, 'Time cannot be more than 5 characters'],
  },
})
const Reserve = mongoose.models.Reserve || mongoose.model('Reserve', reserveSchema)
export default Reserve
