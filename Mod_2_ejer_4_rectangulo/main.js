
class Rectangulo {
  constructor(ancho, altura) {
    this.ancho = ancho;
    this.altura = altura;
  }


  calcularArea() {
    return this.ancho * this.altura;
  }

  calcularPerimetro() {
    return 2 * (this.ancho + this.altura);
  }
}


const miRectangulo = new Rectangulo(5, 10);


const area = miRectangulo.calcularArea();
const perimetro = miRectangulo.calcularPerimetro();


console.log(`El área del rectángulo es: ${area}`);
console.log(`El perímetro del rectángulo es: ${perimetro}`);

