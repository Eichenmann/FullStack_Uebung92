const express = require('express');
const router = express.Router();
const Message = require('./models/Message');

// diese Routen speichern und lesen die Nachricht dynamisch von der MongoDB-Datenbank aus
router.get('/', async (req, res) => {
    console.log('GET /api/nachricht ', req.ip);
    let message = await Message.findOne(); 
    res.json({ nachricht: message.nachricht });
});

// async und await verwendet, um die MongoDB-Operationen abzuwarten, da diese asynchron sind
router.post('/update', async (req, res) => {
    console.log('PUT /api/nachricht/update ', req.ip);
    let message = await Message.findOne();
    message.nachricht = req.body.nachricht;
    await message.save();
    res.status(200).send();
});

module.exports = router;