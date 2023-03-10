/*
cats-controller.mjs

This script has 3 purposes:

1. Defines the Cat CONTROLLER and endpoints for our API.
Here we define the Express server and routes, and use the 
data model to expose the CRUD operations in a RESTful way.

2. Also defines the endpoints for our Email forwarding backend 
for orders. 

3. Also defines a random person endpoint as an alternative to
running in the browser.
*/

// Import dependencies.
import 'dotenv/config';
import express from 'express';
import nodemailer from 'nodemailer';
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
        req.body.portraitUrl,
        req.body.personality,
        req.body.rodentCount,
        req.body.birdCount
    )
        .then(cat => {
            res.status(201).json(cat);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ error: '400: Create document failed.' });
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
                res.status(404).json({ Error: '404: Document not found.' });
            }
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: '400: Retrieve document failed.' });
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
                res.status(404).json({ Error: '404: Document not found' });
            }
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: '400: Retrieve document failed' });
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
        req.body.portraitUrl,
        req.body.personality,
        req.body.rodentCount,
        req.body.birdCount
    )
        .then(cat => {
            res.json(cat);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ error: '400: Document update failed' });
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
                res.status(404).json({ Error: '404: Document no longer exists' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ error: 'Delete a document failed.' });
        });
}));

// Delete all cats.
// Pass in an empty filter to delete all documents.
app.delete('/cats', asyncHandler(async (req, res) => {
    catDataModel.deleteCatByProperty({});
}));



// ====================== EMAIL BACKEND ======================
app.post('/order', asyncHandler(contactFormHandler));

// Contact form route handler.
async function contactFormHandler(req, res) {
    // Send two emails using SMTP, one as vendor record, and another
    // as order confirmation for customer.

    const messageIds = [];

    // Create a SMTP transporter object and send vendor record email.
    let transporter = createTransporter();
    try {
        transporter.sendMail(createOrderMessage(req), (err, info) => {
            if (err) {
                console.log('Error occurred. ' + err.message);
                return process.exit(1);
            }
            console.log('Message sent: %s', info.messageId);
            messageIds.push(info.messageId);
        });
    } catch {
        console.log('Failed to send vendor record email.');
    }


    // Create a SMTP transporter object and send vendor record email.
    transporter = createTransporter();
    try {
        transporter.sendMail(createConfirmMessage(req), (err, info) => {
            if (err) {
                console.log('Error occurred. ' + err.message);
                return process.exit(1);
            }
            console.log('Message sent: %s', info.messageId);
            messageIds.push(info.messageId);
        });
    } catch {
        console.log('Failed to send customer order confirmation email.')
    }

    // Return a success message.
    res.status(204).send();
}

// Returns a SMTP transporter object with SendInBlue API crednetials.
function createTransporter() {
    const transporter = nodemailer.createTransport({
        host: process.env.SENDINBLUE_SMTP_HOST,
        port: process.env.SENDINBLUE_SMTP_PORT,
        auth: {
            user: process.env.SENDINBLUE_SMTP_USER,
            pass: process.env.SENDINBLUE_SMTP_PASS
        }
    });
    return transporter
}

// Order message template.
function createOrderMessage(req) {

    const message = {
        from: `CS-290 Order Page <kevinkuei@gmail.com>`,
        to: 'Kevin Kuei <kueik@oregonstate.edu>',
        subject: 'New CS-290 Order',
        text: `New Order Details:

        Customer Info
        Name: ${req.body.formData.name}
        Email: ${req.body.formData.email}
        Number: ${req.body.formData.phoneNumber}

        Shipping Info
        Shipping Address: ${req.body.formData.shippingAddress}
        Delivery Instructions: ${req.body.formData.deliveryInstructions}
        
        Payment Info
        Credit Card Number: ${req.body.formData.creditCardNumber}
        CCV Code: ${req.body.formData.ccvCode}
        Postal Code: ${req.body.formData.postalCode}
        
        Order Info
        Items: ${JSON.stringify(req.body.orderItems)}
        Total: ${req.body.orderTotal}
        `
    };
    return message;
}

// Customer order confirmation message template.
function createConfirmMessage(req) {
    const recipient = `${req.body.formData.name} <${req.body.formData.email}>`;
    const message = {
        from: `CS-290 Order Page <kevinkuei@gmail.com>`,
        to: recipient,
        subject: 'CS-290 Confirmation Order',
        text: `Your Order Details:

        Customer Info
        Name: ${req.body.formData.name}
        Email: ${req.body.formData.email}
        Number: ${req.body.formData.phoneNumber}
        
        Order Info
        Total: ${req.body.orderTotal}
        Items: ${JSON.stringify(req.body.orderItems)}

        Shipping Info
        Shipping Address: ${req.body.formData.shippingAddress}
        Delivery Instructions: ${req.body.formData.deliveryInstructions}
        `
    };
    return message;
}




// ====================== RANDOM PERSON API ======================
// Endpoint for the random person API.
app.get('/random', asyncHandler(getRandomPersonData));

async function getRandomPersonData(req, res) {
    try {
        // Call random person API and parse the data.
        const url = 'https://randomuser.me/api/?results=10&gender=female';
        const response = await fetch(url);
        const data = await response.json();

        // Send the data back to the browser.
        res.json(JSON.stringify(data))
        console.log('Backend successfully sent random person data.')
    } catch (error) {
        console.error('Backend failed to send random person data:', error)
    }

}
