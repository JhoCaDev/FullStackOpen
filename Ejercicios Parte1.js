// Ejemplo de arrays
const arr1 = [];
arr1.push(25);
arr1.push(34);
arr1.push("Hola Mundo");

console.log(arr1);
arr1.forEach((value) => {
  console.log(value);
});

// Ejercicios de Concat
const arr2 = arr1.concat("Ingrese con Concat");
console.log(arr1);
console.log(arr2);

// Ejercicios de Map
const arr3 = [1, 4, 9, 16, 25];
const valor = arr3.map((value) => {
  return value;
});
const doble = arr3.map((value) => {
  // return value * value;
  return Math.pow(value, 2);
});
const raiz = arr3.map((value) => {
  return Math.sqrt(value);
});
const sentence = arr3.map((value) => {
  return `<li>${value}</li>`;
});
const triple = arr3.map((value) => {
  return value * 3;
});

console.log(valor);
console.log(doble);
console.log(raiz);
console.log(sentence);
console.log(triple);

// Ejercicios de Desestructuración
const arr4 = ["hola", "mundo", 10, 20, 30];
const [x, y, ...otros] = arr4;

console.log(x);
console.log(y);
console.log(otros);

// Ejemplo de Objetos
const obj = {
  nombre: "Jhoswe",
  apellido: "Castro",
  edad: 34,
  "Lugar de Nacimiento": {
    Departamento: "Cusco",
    Provincia: "Cusco",
    Distrito: "Wanchaq",
  },
};

const prueba = "edad";

console.log(obj);
console.log(obj.nombre);
console.log(obj["nombre"]);
console.log(obj.apellido);
console.log(obj.edad);
console.log(obj["Lugar de Nacimiento"]);
console.log(obj["Lugar de Nacimiento"].Departamento);
console.log(obj["Lugar de Nacimiento"].Provincia);
console.log(obj["Lugar de Nacimiento"].Distrito);
console.log(obj[prueba]);

// Agregando propiedades
obj.apodo = "Pepue";
obj["Nombre de Esposa"] = "Zulema";
console.log(obj);
console.log(obj.apodo);
console.log(obj.apodo);
console.log(obj["Nombre de Esposa"]);

// Ejemplos de Funciones
const suma = (p1, p2) => {
  console.log(p1);
  console.log(p2);
  return p1 + p2;
};

console.log(suma(9, 6));

const multiplicar = (p1) => {
  console.log(p1);
  return p1 * p1;
};

console.log(multiplicar(9));

const cuadrado = (p1) => Math.pow(p1, 2);

console.log(cuadrado(5));

// Función Declarada
function suma2(a, b) {
  return a + b;
}

const resultado = suma2(8, 6);
console.log(resultado);

// Función Expresada
const resta = function (a, b) {
  return a - b;
};

const resultado2 = resta(9, 6);
console.log(resultado2);

const Header = (props) => {
  console.log(props);
  return "<h1>{props.course}</h1>;";
};

// Métodos de objeto y This
const jhoswe = {
  nombre: "Jhoswe",
  apellido: "Castro",
  edad: 34,
  saludo: function () {
    return `Hola mi nombre es ${this.nombre}`;
  },
  despedida: function () {
    return `adios, fue un gusto ${this.nombre}`;
  },
  suma: function (a, b) {
    return a + b;
  },
};

// Accediendo desde una variable
const otroValor = "edad";

console.log(jhoswe[otroValor]);

// Agregando una función al objeto
jhoswe.creciendo = function () {
  return (this.edad += 1);
};

// Asignando la funcion a una variable
const sumaDeVariables = jhoswe.suma;
const prueba2 = jhoswe.despedida;

console.log(jhoswe.despedida());
console.log(jhoswe.saludo());
console.log(jhoswe.creciendo());
console.log(sumaDeVariables(25, 30));
console.log(prueba2());
console.log(jhoswe.saludo.bind(jhoswe)());

const obj2 = {
  name: "Genner",
  surname: "Castro",
  greet: function () {
    return `Hola, mi nombre es ${this.name}`;
  },
};

const prueba3 = obj2.greet;

console.log(prueba3.bind(obj2)());

// Clases
class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  greet() {
    return `mi nombre es ${this.name}`;
  }
}

const jhoswe2 = new Person("Jhoswe", "Castro");
const genner = new Person("Genner", "Castañeda");
const synthar = new Person("Synthar", "Castro");

console.log(jhoswe2.name);
console.log(jhoswe2.surname);
console.log(jhoswe2.greet());
console.log(synthar.name);
console.log(genner.surname);
console.log(synthar.greet());

const string = "hola mundo";
const stringMod = string.toUpperCase();

console.log(string);
console.log(stringMod);
