const express = require('express'),
      bodyParser = require('body-parser')
      massive = require('massive');
const ctrl = require(`${__dirname}/controller`),
      port = 4000;
      require('dotenv').config();

const app = express();

app.use(bodyParser.json());
massive(process.env.CONNECTION_STRING)
.then(db => {
  app.set('db', db);
  app.listen(port, _=> console.log(`Housten we have lift off on port ${port}`));
  
  app.get('/api/inventory', ctrl.readInventory)
  app.post('/api/product', ctrl.createProduct)
  
})

