const saludar = (nombre) => {
    alert (`KE ONDA ${nombre} ? VINISTE POR PIZZAS O EMPANADAS?`);
}
const SaludoUser = (ss) => {
    const nombre = prompt ("Por favor ingresa tu nombre");
    ss(nombre);
};

SaludoUser(saludar);

const pizzas = [
    {
    nombre:'Marinara',
    calorias:2099,
    ingredientes:'Tomate, ajo, orégano y aceite de oliva',
    masa: 'SIN TACC',
    precio:2150,
    id:1
    },
    {
    nombre: 'Margherita',
    calorias:2099,
    ingredientes:'Tomate, mozzarella, mozzarella de búfala campana en cubitos o fior di latte, albahaca y aceite extravirgen de oliva',
    masa: 'CON TACC',
    precio:2250,
    id:2
    },
    {
    nombre: 'Napoletana',
    calorias:2300,
    ingredientes:'Tomate, mozzarella, mozzarella de búfala campana en cubitos o fior di latte, albahaca y aceite extravirgen de oliva',
    masa: 'CON TACC',
    precio:3000,
    id:3
    },
    {
    nombre:'Quattro Formaggi',
    calorias:3500,
    ingredientes:'Tomate, mozzarella, roquefort, fontina, parmesano y albahaca',
    masa:'CON TACC',
    precio:3200,
    id:4
    },
    {
    nombre:'Capricciosa',
    calorias:2500,
    ingredientes:'Tomate, mozzarella, grana padano rallado, albahaca, champiñones, alcachofa, jamón cocido, aceitunas, aceite, anchoas y huevo duro',
    masa:'CON TACC',
    precio:3100,
    id:5
    },
    {
    nombre:'Vegetariana',
    calorias:2000,
    ingredientes:'Queso mozzarella, cebolla, pimiento verde, tomate, aceitunas negras, champiñon',
    masa:'SIN TACC',
    precio:2100, 
    id:6
    },
    {
    nombre:'Mozzarella (Individual)',
    calorias:1000,
    ingredientes:'Queso mozzarella, oregano ,aceitunas y aceite',
    masa:'CON TACC',
    precio:500, 
    id:7
    },
    {
    nombre:'Vegetariana (Individual)',
    calorias:1000,
    ingredientes:'Queso mozzarella, cebolla, pimiento verde, tomate,aceitunas negras, champiñon',
    masa:'SIN TACC',
    precio:600, 
    id:8
    }        
]

// ID IMPARES

const idImpar = pizzas.filter ((Pizza) => {
    return Pizza.id % 2 === 1;
});
idImpar.forEach ((Pizza) => {
    console.log (` Nuestra Pizza ${Pizza.nombre}, tiene un id impar.`);
});

// Precios

const preciopizza = pizzas.map((Pizza) => {
    return {...Pizza,precio: Pizza.precio};
});
preciopizza.forEach((Pizza) => {
    console.log(` El valor de la Pizza ${Pizza.nombre} es de $${Pizza.precio}.`);
} );

// PRECIOS <,= o >

const PreciosMayoresA = (precio) => {
    return pizzas.some ((Pizza) => {
        return Pizza.precio > precio;
    })
    ? console.log (` Tenemos pizzas que salen más de $${precio}.`)
    : console.log(` No tenemos pizzas con un precio superior a los $${precio}.`);
};
PreciosMayoresA (5000)
PreciosMayoresA (599)

// Cada Pizza con ingredientes

 const IngredientesPizza = pizzas.map((Pizza) => {
    return {...Pizza,ingredientes: Pizza.ingredientes};
});
IngredientesPizza.forEach((Pizza) => {
    console.log(` Los ingredientes de ${Pizza.nombre} son: ${Pizza.ingredientes}.  PRECIO: $${Pizza.precio}.`);
} );
