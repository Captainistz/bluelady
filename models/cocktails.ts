import mongoose from 'mongoose'

const reserveSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    unique: true,
    trim: true,
    maxlength: [25, 'Name cannot be more than 25 characters'],
  },
  intro: {
    type: String,
    required: [true, 'Please add a name'],
    unique: false,
    trim: true,
    maxlength: [50, 'Name cannot be more than 50 characters'],
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
    trim: true,
    maxlength: [150, 'Description cannot be more than 150 characters'],
  },
  ingredients: [
    {
      type: Object,
      required: ['name', 'quantity', '_type'],
      properties: {
        name: {
          type: String,
          description: 'Must be string and is required',
        },
        quantity: {
          type: Number,
          description: 'Must be number and is required',
        },
        _type: {
          type: String,
          description: 'Must be string and is required',
        },
      },
    },
  ],
})
const Reserve = mongoose.models.Cocktails || mongoose.model('Cocktails', reserveSchema)
export default Reserve
