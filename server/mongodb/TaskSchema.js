const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  openedBy: { type: String },
  status: { type: String },
  isOpen: { type: Boolean }
});

module.exports = new mongoose.model('Task', TaskSchema);
