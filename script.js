"use strict";
let mountains = [
    { name: "Kilimanjro", height: 19341 },
    { name: "Everest", height: 29029 },
    { name: "Denali", height: 20310 }
];
let findNameOfTallestMountain = (arrayOfMountains) => {
    let tallestMountainHeight = 0;
    let nameOfTallestMountain = "";
    arrayOfMountains.forEach(mountain => {
        if (mountain.height > tallestMountainHeight) {
            tallestMountainHeight = mountain.height;
            nameOfTallestMountain = mountain.name;
        }
    });
    return nameOfTallestMountain;
};
let result = findNameOfTallestMountain(mountains);
console.log(result);
let products = [
    { name: "Louis Vuitton Skateboard", price: 8250 },
    { name: "Tesla", price: 60000 },
    { name: "Crystal Ergo Vaccum", price: 18993 }
];
let calcAverageProductPrice = (arrayOfProducts) => {
    let totalPrice = 0;
    arrayOfProducts.forEach(product => {
        totalPrice += product.price;
    });
    return totalPrice / products.length;
};
console.log(calcAverageProductPrice(products));
let inventory = [
    { product: { name: "motor", price: 10.0 }, quantity: 10 },
    { product: { name: "sensor", price: 12.5 }, quantity: 4 },
    { product: { name: "LED", price: 1.0 }, quantity: 20 }
];
let calcInventoryValue = (arrayOfInventoryItem) => {
    let totalPrice = 0;
    arrayOfInventoryItem.forEach(item => {
        totalPrice += item.product.price * item.quantity;
    });
    return totalPrice;
};
console.log(calcInventoryValue(inventory));
