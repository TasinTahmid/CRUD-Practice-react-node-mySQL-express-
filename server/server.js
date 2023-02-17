const express = require('express');
const app = express();


app.get('/', (req, res) =>{
  res.send('This is get request from get(/)');
});


app.listen(5000, () => {
  console.log('Listening to the port 5000...');
});