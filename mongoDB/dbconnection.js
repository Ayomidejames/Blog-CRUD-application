const mongoose = require('mongoose')

const connectDB = async () => {
    // try to await response
    try {
        console.log('connecting to MongoDB...')
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("MongoDb connected.")
    // if the try block throws error, we catch the error in the catch block
    } catch (error) {
        console.log(error)
    }
    
}

module.exports = connectDB