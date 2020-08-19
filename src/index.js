import "./styles.css";

document.getElementById("app").innerHTML = `
  Ejemplo Libro
`;
class Computador {
  constructor(torre, pantalla, teclado, mouse) {
    this.torre = torre;
    this.pantalla = pantalla;
    this.teclado = teclado;
    this.mouse = mouse;
  }
  prepararComputador() {
    console.log(
      `elige ${this.pantalla}, ${this.teclado}, cosa para trabajar: ${this.mouse}`
    );
    return this;
  }
}
