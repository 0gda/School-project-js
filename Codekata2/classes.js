class Product{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
    displayProduct(){
        console.log(`product: ${this.name}`);
        console.log(`price: ${this.price.toFixed(2)}`);
        
    }
    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}

const tax = 0.21;
const product1 = new Product("shirt",19.99);
const product2 = new Product("PC",200);
product1.displayProduct();
product2.displayProduct();
const total = product2.calculateTotal(tax);
console.log(`total price with tax: $${total.toFixed(2)}`);