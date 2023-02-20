const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "employee_management_system",
});

app.get('/', (req, res) =>{
  
  res.send('This is get request from get(/)');
});

app.post('/api/create',(req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const country = req.body.country;
  const position = req.body.position;
  const wage = req.body.wage;

  console.log(name, age, wage);

  db.query(
    'INSERT INTO employees (name, age, country, position, wage) VALUES (?,?,?,?,?)', 
  [name, age, country, position, wage], 
  (err, result) => {
    if(err) {return console.log(err);}

    res.send("Values Inserted.");
  });
});

app.listen(5000, () => {
  console.log('Listening to the port 5000...');
});