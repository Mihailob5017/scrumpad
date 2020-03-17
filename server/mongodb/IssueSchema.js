const mongoose = require('mongoose');

const IssueSchema = new mongoose.Schema({
  name: { type: String },
  taskId: { type: String },
  description: { type: String },
  isOpen: { type: Boolean }
});

module.exports = new mongoose.model('Issue', IssueSchema);
