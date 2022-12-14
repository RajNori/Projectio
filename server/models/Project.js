const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: 
    ['start', 
    'planning', 
    'ux',
    'content',
    'Code',
    'qa',
    'launch']
  },
  creator:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User'
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client',
  },
});
module.exports = mongoose.model('Project', projectSchema);
