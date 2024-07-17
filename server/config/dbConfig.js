const mongoose = require('mongoose');

const dbConfig = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
        });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Database connection failed');
    }
}

module.exports = dbConfig;