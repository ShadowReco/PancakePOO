import "./styles.css";

document.getElementById("app").innerHTML = `
  Ejemplo pancake
`;

//HOLA

class Pancake {
  constructor(sabor, tamaño, ingredientes) {
    this.sabor = sabor;
    this.tamaño = tamaño;
    this.ingredientes = ingredientes;
  }

  preparar() {
    console.log(
      `Preparando pancake ${this.sabor}, ${this.tamaño}, Ingredientes: ${this.ingredientes}`
    );
    return this;
  }

  cocinar() {
    console.log("El pancake se esta concinando");
    console.log("El pancake se cocino");
    return this;
  }

  empacar() {
    console.log("Empacando la pancake...");
    console.log("El pancake se está enviando");
    return this;
  }
}

class Combo extends Pancake {
  constructor(sabor, tamaño, ingredientes, combo, bebida, malteada, cantidad) {
    super(sabor, tamaño, ingredientes);
    this.combo = combo;
    this.bebida = bebida;
    this.postre = malteada;
    this.cantidad = cantidad;
  }

  elegirCombo() {
    this.preparar();
    this.cocinar();
    this.empacar();

    console.log(
      `Pedido: \nCombo: ${this.combo}\nCantidad: ${this.cantidad}\nPizza: ${this.tamaño}, ${this.sabor}, Ingredientes: ${this.ingredientes} \nBebida: ${this.bebida}\nPostre: ${this.malteada}`
    );
    return this;
  }
}

const Combo1 = new Combo(
  "Sabor chocolate",
  "Varios",
  ["Arequipe", "Chocolate"],
  1,
  "Pepsi",
  "Malteada de vainilla",
  2
);
console.log(Combo1.elegirCombo());