 import{ Product, taxCalculation } from './06-function-destrugturing'
 const shoppingCart: Product[] = [
 {
    description: 'Nokia',
    price:100
 },
 {
    description: 'ipad',
    price: 150
 }
 ];

 const[total, tax] = taxCalculation({
    products: shoppingCart,
    tax: 0.15
 });