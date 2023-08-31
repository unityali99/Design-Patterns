import ArrayIterator from "./classes/ArrayIterator";
import Product from "./classes/Product";

const productList = [
  new Product(1, "A"),
  new Product(2, "B"),
  new Product(3, "C"),
];

const iterator = new ArrayIterator<Product>(productList);

while (iterator.hasNext()) {
  const product = iterator.current();
  product.toString();
  iterator.next();
}
