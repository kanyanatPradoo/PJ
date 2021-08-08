
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'project'
});

const app = express();
app.get('/project', function (req, res) {
    connection.getConnection(function (err, connection) {

    connection.query('SELECT * FROM project', function (error, results, fields) {
     
      if (error) throw error;
      res.send(results)
    });
  });
});

app.listen(3000, () => {
 console.log('Go to http://localhost:3000/project so you can see the data.');
});
