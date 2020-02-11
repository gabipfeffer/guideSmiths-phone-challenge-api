const express = require('express');

const port = 3005;
const app = express();

const phones = require('./phones');

app.get('/phones', (req, res) => {
  !phones
    ? res.status(400).json('unable to get phone list')
    : res.status(200).json(phones);
});

app.get('/phones/:idPhone', (req, res) => {
  const { idPhone } = req.params;

  !phones
    ? res.status(400).json('unable to get phone by id')
    : res.json(phones.filter(phone => phone.id.toString() === idPhone));
});

app.listen(port, console.log(`Server is listening on port ${port}`));
