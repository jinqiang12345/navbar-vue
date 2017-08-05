const _products = [
  {'id': 1, 'title': 'iPad 4 mini', 'price': 500.01, 'inventory': 2},
  {'id': 2, 'title': 'iPhone 7 Plus', 'price': 400.01, 'inventory': 12},
  {'id': 3, 'title': 'iPhone 7', 'price': 300.01, 'inventory': 42}
]

export default {
  getProducts (cb) {
    setTimeout(() => cb(_products), 100)
  },
  buyProducts (products, cb, errorCb) {
    setTimeout(() => {
      (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
        ? cb() : errorCb()
    }, 100)
  }
}
