const pizzas = [
  {
    id: 1,
    nombre: "Muzzarela",
    precio: 1000,
    ingredientes: ["Muzzarela", "Aceitunas"],
  },
  {
    id: 2,
    nombre: "Napolitana",
    precio: 1200,
    ingredientes: ["Muzzarela", "Tomate"],
  },
  {
    id: 3,
    nombre: "Margarita",
    precio: 1500,
    ingredientes: ["Muzzarela", "Aceite de Oliva", "Albahaca"],
  },
  {
    id: 4,
    nombre: "Jamon",
    precio: 1700,
    ingredientes: ["Muzzarela", "Jamon", "Morron"],
  },
  {
    id: 5,
    nombre: "Especial",
    precio: 2000,
    ingredientes: ["Muzzarela", "Panceta", "Cheddar", "Verdeo"],
  },
  {
    id: 6,
    nombre: "Mini",
    precio: 500,
    ingredientes: ["Muzzarela"],
  },
];

// A)
const pizzaImpar = () => 
 pizzas.forEach((numero) => {
  if (numero.id % 2 != 0)
  console.log(`Las pizzas con id impar son: ${numero.nombre} `)
 }
  );

pizzaImpar();

// B)
const menor600 = () => {
  if(pizzas.some((pizza) => pizza.precio < 600)) {
    return "Hay pizzas que valen menos de $600"
  } else {
    return "No hay pizzas con un valor menor a $600"
  }
}

console.log(menor600());

// C)
const nombrePizzas = pizzas.map(({ nombre }) => nombre);
console.log(nombrePizzas);

// D)
const precioPizzas = pizzas.map(({ precio }) => precio);
console.log(precioPizzas);

// E)
const imprimirNombreYPrecio = () => 
 pizzas.forEach((pizza) => 
  console.log(`La pizza ${pizza.nombre} vale $${pizza.precio} `)
  );

imprimirNombreYPrecio();