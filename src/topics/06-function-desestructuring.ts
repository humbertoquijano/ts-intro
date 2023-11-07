export interface Product {
    description: string;
    price: number
}

const phone: Product = {
    description: 'Samsung SE20',
    price: 2350000
}

const tablet: Product = {
    description: 'Ipad',
    price: 1875000
}

const shoppingCart = [phone, tablet];
const tax = 0.15;

interface TaxCalculationOptions {
    tax: number;
    products: Product[]
}

export function taxCalculation(options: TaxCalculationOptions): [number, number] {
    
    const { tax, products } = options;

    let total = 0;

    // desestructuring options.products -> get price
    products.forEach( ({price}) => {
        total += price;
    });

    return [total, total * tax];
}

const [total, taxSale] = taxCalculation({products: shoppingCart, tax: tax});

console.log(`Total ${total} - Tax: ${taxSale}`);
console.log({total, taxSale});
