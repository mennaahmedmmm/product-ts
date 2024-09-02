import { Product, Caritem, ShoppingCart } from './index';

export class ShoppingCartImpl implements ShoppingCart {
    items: Caritem[] = [];

    addItem(product: Product, quantity: number): void {
        const existingItem = this.items.find(item => item.product.id === product.id);

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({ product, quantity });
        }
    }

    removeItem(productId: number): void {
        this.items = this.items.filter(item => item.product.id !== productId);
    }

    calculateTotal(): number {
        return this.items.reduce((total, item) => {
            return total + item.product.price * item.quantity;
        }, 0);
    }
}