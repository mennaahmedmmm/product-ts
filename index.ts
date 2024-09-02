export interface Product {
    id: number;
    name:string;
    price:number;
    stock:number;
    inStock:boolean;
}
 export interface Caritem {
    product:Product;
    quantity:number;
}
export interface ShoppingCart {
    items: Caritem[];
    addItem: (product: Product, quantity: number) => void;
    removeItem: (productId: number) => void;
    calculateTotal: () => number;
}
export type ProductList = Product[];

