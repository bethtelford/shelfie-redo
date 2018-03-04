let returnToDollars = arr => arr.map((el, i) => {
  el.price /= 100
  return el
})

module.exports = {
  readAllProducts: (req, res) => {
    req.app.get('db').all_products()
      .then(products => {
        products = returnToDollars(products);
        res.status(200).send(products)
      })
      .catch(err => {
        console.log('all_products error', err);
        res.status(500).send(err);
      })
  },
  createProduct: (req, res) => {
    let { name, price, img } = req.body;
    req.app.get('db').create_product([name, price, img])
      .then(products => {
        products = returnToDollars(products);
        res.status(200).send(products)
      })
      .catch(err => {
        console.log('create_product error', err);
        res.status(500).send(err);
      })
  },
  updateProduct: (req, res) => {
    let { name, price, img } = req.body;
    let { id } = req.params;
    req.app.get('db').update_product([id, name, price, img])
      .then(products => {
        products = returnToDollars(products);
        res.status(200).send(products);
      })
      .catch(err => {
        console.log('update_product error', err);
        res.status(500).send(err);
      })
  },
  deleteProduct: (req, res) => {
    let { id } = req.params;
    req.app.get('db').delete_product(id)
      .then(products => {
        products = returnToDollars(products);
        res.status(200).send(products);
      })
      .catch(err => {
        console.log('delete_product error', err);
        res.status(500).send(err);
      })
  }
}