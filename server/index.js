require('newrelic');
const express = require('express');
const db = require('../Database/index.js');
const { getProducts, getProductInfo, getStyles, getRelated } = require('../Database/dbQueryFuncs/queries.js')
const app = express();
const port = 3200;


app.get('/products', (req, res) => {
  count = req.query.count || 5;
  page = req.query.page || 1;

  getProducts(count, page, (err, results) => {
    if (err) {
      res.status(400).send('Error Retrieving Products')
    } else {
      res.status(200).send(results);
    }
  })
})

app.get('/products/:product_id', (req, res) => {
  getProductInfo(req.params.product_id, (err, results) => {
    if (err) {
      res.status(400).send('Error Retrieving Product Info')
    } else {
      res.status(200).send(results);
    }
  })
});

app.get('/products/:product_id/styles', (req, res) => {
  getStyles(req.params.product_id, (err, results) => {
    if (err) {
      res.status(400).send('Error Retrieving Styles');
    } else {
      res.status(200).send(results);
    }
  });
})

app.get('/products/:product_id/related', (req, res) => {
  getRelated(req.params.product_id, (err, results) => {
    if (err) {
      res.status(400).send('Error Retrieving Related Product Info');
    } else {
      res.status(200).send(results);
    }
  });
})


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});