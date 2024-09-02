"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shoppingcarts_1 = require("./shoppingcarts");
var productCatalog = [
    { id: 1, name: 'Laptop', price: 1200, stock: 2, inStock: true },
    { id: 2, name: 'headphones', price: 800, stock: 4, inStock: true },
    { id: 3, name: 'Smartphone', price: 1100, stock: 5, inStock: true },
];
var cart = new shoppingcarts_1.ShoppingCartImpl();
// Add items to the cart
cart.addItem(productCatalog[0], 1);
cart.addItem(productCatalog[1], 2);
// Calculate total
var total = cart.calculateTotal();
console.log("Total: $".concat(total));
// Remove an item
cart.removeItem(2);
// Calculate total again
var updatedTotal = cart.calculateTotal();
console.log("Updated Total: $".concat(updatedTotal));
