let returnToDollars = arr => arr.map((el, i) => {
  el.price /= 100
  return el
})

module.exports = {
  readInventory: (req, res) => {
    req.app.get('db').read_inventory()
    .then(products => {
      products = returnToDollars(products);
      res.status(200).send(products);
    })
    .catch(err => {
      console.log('read_inventory error', err);
      res.status(500).send();
    })
  },
  createProduct: (req, res) => {
    console.log('body', req.body)
    let {name, price, img} = req.body;
    req.app.get('db').create_product([name, price, img])
    .then(_ => {
      res.status(200).send()
    })
    .catch(err => {
      console.log('create_product error', err);
      res.status(500).send();
    })
  },
  deleteProduct: (req, res) => {
    let { id } = req.params;
    req.app.get('db').delete_product(id)
      .then(_ => {
        res.status(200).send();
      })
      .catch(err => {
        console.log('delete_product error', err);
        res.status(500).send(err);
      })
  },
  updateProduct: (req, res) => {
    let { name, price, img } = req.body;
    let { id } = req.params;
    req.app.get('db').update_product([id, name, price, img])
      .then(_ => {
        res.status(200).send();
      })
      .catch(err => {
        console.log('update_product error', err);
        res.status(500).send(err);
      })
  }
}