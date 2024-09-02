import { ProductList } from './index';
import { ShoppingCartImpl } from './shoppingcarts';

const productCatalog: ProductList = [
    { id: 1, name: 'Laptop', price: 1200,  stock:2,inStock: true },
    { id: 2,  name: 'headphones', price: 800,  stock:4, inStock: true },
    { id: 3, name: 'Smartphone', price: 1100,  stock:5,inStock: true },
];

const cart = new ShoppingCartImpl();

// Add items to the cart
cart.addItem(productCatalog[0], 1);
cart.addItem(productCatalog[1], 2); 

// Calculate total
const total = cart.calculateTotal();
console.log(`Total: $${total}`);

// Remove an item
cart.removeItem(2); 

// Calculate total again
const updatedTotal = cart.calculateTotal();
console.log(`Updated Total: $${updatedTotal}`);