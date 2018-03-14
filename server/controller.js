const noImage = './../src/assets/no_image.png'

let returnToDollars = arr => arr.map((el, i) => {
  el.price /= 100
  return el
})

module.exports = {
  readInventory: (req, res) => {
    req.app.get('db').read_inventory()
    .then(products => {
      products = returnToDollars(products);
      console.log('products', products)
      res.status(200).send(products)
    })
    .catch(err => {
      console.log('all_products error', err);
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
  }
}