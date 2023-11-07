import { Product, taxCalculation } from './06-function-desestructuring';

const shoppingCart: Product[] = [
    {
        description: 'Cooler AIO asus 360',
        price: 315
    },
    {
        description: 'Fan 120 x 3Pack',
        price: 70
    }
];

const tax = 0.15;

const [totalSale, taxSale] = taxCalculation({products: shoppingCart, tax: tax});

console.log(`Total ${totalSale} - Tax: ${taxSale}`);
