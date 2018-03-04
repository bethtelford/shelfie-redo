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
  
  // Part 1
  app.get('/api/products', ctrl.readAllProducts)
  app.post('/api/product', ctrl.createProduct)

  // Part 2
  app.put('/api/product/:id', ctrl.updateProduct)
  app.delete('/api/product/:id', ctrl.deleteProduct)
  
})

// setTimeout(_=>app.get('db').all_products().then(data => console.log(data)), 6000)

