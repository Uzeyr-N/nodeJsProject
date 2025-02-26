const mongoose = require ('mongoose')

//connect to database

const connectToDb = async () => {
    try{
        const connect = await mongoose.connect(process.env.MONGO_URI)
        console.log('MONGO DB connected')
    }catch(err){
        console.error(err)


    }
}

module.exports = connectToDb
//export to app.js