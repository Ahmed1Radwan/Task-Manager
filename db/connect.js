const mongoose = require('mongoose');

const mongodb = (connectionKey) =>{
    return mongoose.connect(connectionKey); // return promise
}

module.exports = mongodb;