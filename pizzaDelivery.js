const pizzas = [
    {
        name: "Peperoni",
        price: 20
    },
    {
        name: "Four cheese",
        price: 15
    },
    {
        name: "Mixed",
        price: 22
    },
]

const orderPizzaRandom = pizzas[Math.floor(Math.random() * pizzas.length)];

function pizzaDelivery() {
    console.log("Your " + orderPizzaRandom.name +" pizza " + " is made");
}

pizzaDelivery();
setTimeout(function(){
    console.log("Your pizza in on the way");
}, 2000);
setTimeout(function(){
    console.log("Your pizza is on the spot and price is " + orderPizzaRandom.price + " ₾");
}, 5000);

