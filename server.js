const express = require('express');
const cors = require('cors');
const port = 3005;

const app = express();

// mock data
const phones = require('./phones');

//middleware
app.use(cors());
app.use(express.static('public'));

// get requests
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

app.delete('/phones/:idPhone', (req, res) => {
  const { idPhone } = req.params;
  res.status(200).json(phones.filter(phone => phone.id.toString() !== idPhone));
});

app.listen(port, console.log(`Server is listening on port ${port}`));
