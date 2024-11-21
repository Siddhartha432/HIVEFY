export interface Product{
    description: string;
    price: number
}

const phone:Product={
    description: 'Nokia',
    price: 150
}

const tablet: Product = {
description: 'ipad Air',
price: 250
}



interface taxCalculationOptions{
    tax:number;
    products: Product[]
}


export function taxCalculation(options:taxCalculationOptions): number[]{ 
let total = 0;
options.products.forEach(product =>{
    total += product.price;
}); 
return[total, total*options.tax];
}

const shoppingCart = [phone,tablet];
const tax = 0.15;

const result = taxCalculation({
    products: shoppingCart,
    tax,
})
console.log('Total', result[0]);
console.log('Total', result[1]);
