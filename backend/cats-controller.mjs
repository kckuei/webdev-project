/*
cats-controller.mjs

Defines the Cat controller and routes for our API.

Here, we create our Express API server, and use our data model from 
cats-model.mjs to expose the CRUD operations in in a RESTful way.
*/

// Import dependencies.
import 'dotenv/config';
import express from 'express';
import asyncHandler from 'express-async-handler';
import * as catDataModel from './cats-model.mjs';


// ====================== EXPRESS SERVER ======================
// Define express server.
const PORT = process.env.PORT;
const app = express();

// REST needs JSON MIME type.
app.use(express.json());

// Confirm port number we are listening on.
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});


// ====================== CREATE CONTROLLERS ======================
// Create a cat.
app.post('/cats', asyncHandler(async (req, res) => {
    catDataModel.createCat(
        req.body.name,
        req.body.age,
        req.body.breed,
        req.body.portrait_url,
        req.body.personality,
        req.body.rat_kills,
        req.body.bird_kills
    )
        .then(cat => {
            res.status(201).json(cat);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ error: 'create a document failed' });
        });
}));


// ====================== RETRIEVE CONTROLLERS ======================
// Get all cats.
app.get('/cats', asyncHandler(async (req, res) => {
    catDataModel.retrieveCats()
        .then(cat => {
            if (cat !== null) {
                res.json(cat);
            } else {
                res.status(404).json({ Error: 'document not found.' });
            }
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'retrieve document failed.' });
        });
}));


// Retrieve cat by _id. 
// Use the request params attribute to get the id from the url.
app.get('/cats/:_id', asyncHandler(async (req, res) => {
    catDataModel.retrieveCatByID(req.params._id)
        .then(cat => {
            if (cat !== null) {
                res.json(cat);
            } else {
                res.status(404).json({ Error: 'document not found' });
            }
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'retrieve document failed' });
        });

}));


// ====================== UPDATE CONTROLLERS ======================
// Update a cat by id.
// Use the request params attribute to get the id from the url.
app.put('/cats/:_id', asyncHandler(async (req, res) => {
    catDataModel.updateCat(
        req.params._id,
        req.body.name,
        req.body.age,
        req.body.breed,
        req.body.portrait_url,
        req.body.personality,
        req.body.rat_kills,
        req.body.bird_kills
    )
        .then(cat => {
            res.json(cat);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ error: 'document update failed' });
        });
}));


// ====================== DELETE CONTROLLERS ======================
// Delete a cat by id.
app.delete('/cats/:_id', asyncHandler(async (req, res) => {
    catDataModel.deleteCatById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send();
            } else {
                res.status(404).json({ Error: 'document no longer exists' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ error: 'delete a document failed' });
        });
}));

// Delete all cats.
// Pass in an empty filter to delete all documents.
app.delete('/cats', asyncHandler(async (req, res) => {
    catDataModel.deleteCatByProperty({});
}));
