/* cats-model.mjs

Defines the Cat data MODEL and methods used by the CONTROLLER.
Here, we connect to our mongoDB database, define the schema, 
and basic CRUD operations.
*/

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';
mongoose.set('strictQuery', true);

// ====================== CONNECTION ======================
// Connect to Atlast cluster or local MongoDB based on the 
// .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a 
// message in console.
db.once("open", (err) => {
    if (err) {
        res.status(500).json({ error: '500:Connection to the server failed.' });
    } else {
        console.log('Successfully connected to MongoDB Cats collection using Mongoose.');
    }
});


// ====================== SCHEMA ======================
// Define the collection's schema.
const catSchema = mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    breed: { type: String, required: true },
    portraitUrl: { type: String, required: false },
    personality: { type: String, required: false },
    rodentCount: { type: Number, required: false },
    birdCount: { type: Number, required: false }
});

// Compile the model from the schema.
const Cat = mongoose.model('Cat', catSchema);


// ====================== CREATE MODELS ======================
// CREATE model 
const createCat = async (name, age, breed,
    portraitUrl, personality, rodentCount, birdCount) => {
    const cat = new Cat({
        name: name,
        age: age,
        breed: breed,
        portraitUrl: portraitUrl,
        personality: personality,
        rodentCount: rodentCount,
        birdCount: birdCount
    });
    return cat.save();
};


// ====================== RETRIEVE MODELS ======================
// RETRIEVE based on a filter and return a promise.
const retrieveCats = async () => {
    const query = Cat.find();
    return query.exec();
};

// RETRIEVE by ID.
const retrieveCatByID = async (_id) => {
    const query = Cat.findById({ _id: _id });
    return query.exec();
};

// ====================== DELETE MODELS ======================
// DELETE model based on _id 
const deleteCatById = async (_id) => {
    const result = await Cat.deleteOne({ _id: _id });
    return result.deletedCount;
};

// DELETE based on filter.
const deleteCatByProperty = async (filter) => {
    const result = await Cat.deleteMany(filter);
    return result.deletedCount;
};


// ====================== UPDATE MODELS ======================
// UPDATE model
const updateCat = async (_id, name, age, breed,
    portraitUrl, personality, rodentCount, birdCount) => {
    const result = await Cat.replaceOne({ _id: _id }, {
        name: name,
        age: age,
        breed: breed,
        portraitUrl: portraitUrl,
        personality: personality,
        rodentCount: rodentCount,
        birdCount: birdCount
    });
    return {
        _id: _id,
        name: name,
        age: age,
        breed: breed,
        portraitUrl: portraitUrl,
        personality: personality,
        rodentCount: rodentCount,
        birdCount: birdCount
    }
}


// Export our variables for use in the controller file.
export { createCat, retrieveCats, retrieveCatByID, updateCat, deleteCatById, deleteCatByProperty }