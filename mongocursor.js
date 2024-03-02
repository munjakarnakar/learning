const mongoose = require('mongoose');

// Connection URI
const uri = 'mongodb://localhost:27017/dazn';

// Options for the connection
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const movies = new mongoose.Schema({
    "name" : String,
    "genre" : String,
    "rating" : Number,
    "is_deleted" : Boolean,
    "streamingLink" : String
  });
  
  // Define a Mongoose model based on the schema
  const User = mongoose.model('User', movies);

// Connect to MongoDB
mongoose.connect(uri, options)
  .then(async () => {
    console.log('Connected successfully to MongoDB');
    const data = await User.find()
    console.log(data)
    // Now you can define and use your models here
    
  })
  .catch((error) => {
    console.error('Error occurred while connecting to MongoDB', error);
  });
