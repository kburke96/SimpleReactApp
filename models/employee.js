const mongoose = require('mongoose');
mongoose.connect(
  'mongodb://localhost:27017/Weights',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
//
const weightSchema = new mongoose.Schema({
  weighedDate: {type: Date, default: Date.now},
  empWeight: Number
});
//
const empSchema = new mongoose.Schema({
  empName: String,
  empPass: String,
  employeeWeights: [weightSchema],
  createdOn: {type: Date, default: Date.now }
});

module.exports = mongoose.model('Employee', empSchema);
