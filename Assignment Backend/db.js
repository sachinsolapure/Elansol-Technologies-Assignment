const mongoose=require('mongoose');

const mongoURL='mongodb://127.0.0.1:27017/Elansol';
const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURL, { useNewUrlParser: true });
        console.log('Connected...');
        // const fetched_data = await mongoose.connection.db.collection("food_items");
        // const data = await fetched_data.find({}).toArray();
        console.log();
    } catch (err) {
        console.error();
    }
}

module.exports = mongoDB;