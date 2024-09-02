"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCartImpl = void 0;
var ShoppingCartImpl = /** @class */ (function () {
    function ShoppingCartImpl() {
        this.items = [];
    }
    ShoppingCartImpl.prototype.addItem = function (product, quantity) {
        var existingItem = this.items.find(function (item) { return item.product.id === product.id; });
        if (existingItem) {
            existingItem.quantity += quantity;
        }
        else {
            this.items.push({ product: product, quantity: quantity });
        }
    };
    ShoppingCartImpl.prototype.removeItem = function (productId) {
        this.items = this.items.filter(function (item) { return item.product.id !== productId; });
    };
    ShoppingCartImpl.prototype.calculateTotal = function () {
        return this.items.reduce(function (total, item) {
            return total + item.product.price * item.quantity;
        }, 0);
    };
    return ShoppingCartImpl;
}());
exports.ShoppingCartImpl = ShoppingCartImpl;
