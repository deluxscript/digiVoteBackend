const mongoose = require('mongoose');
const config = require('config');
const dbURI = config.get('mongoURI');

const connectDB = async () => {
    try {
        await mongoose.connect(
            dbURI,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        );
        console.log('Database is connected');
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
};

module.exports = connectDB;