const mongoose = require('mongoose');
const { Schema } = mongoose;

const Landlord = new Schema(
  {
    name: { type: String, required: true },
    type: {
      type: String,
      enum: ['landlord', 'property manager'],
      required: true,
    },
    location: { type: [String], required: true },
    numTenants: { type: Number },
    comments: [
      {
        userId: 'string',
        body: 'string',
      },
    ],
  },
  { timestamps: true },
);

module.exports = mongoose.model('landlords', Landlord);
