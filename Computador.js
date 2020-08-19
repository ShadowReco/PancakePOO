import "./styles.css";

document.getElementById("app").innerHTML = `
  Ejemplo Computador
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
      `Preparando el Computador ${this.pantalla}, ${this.teclado}, ${this.mouse}`
    );
    return this;
  }
  revisandoComponentes() {
    console.log("Los componentes se estan verificando");
    console.log("Los componentes fueron verificados");
    return this;
  }
  envio() {
    console.log("El computador a sido enviado");
    return this;
  }

  En;
}
