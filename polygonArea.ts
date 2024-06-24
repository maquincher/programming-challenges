/*
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */

interface Polygon {
  area(): number;
  printArea(): void;
}

class Triangle implements Polygon {
  constructor(private base: number, private heigth: number) {}
  area(): number {
    return (this.base * this.heigth) / 2;
  }
  printArea(): void {
    console.log(`The area of Triangle is ${this.area()}`);
  }
}

class Rectangle implements Polygon {
  constructor(private length: number, private width: number) {}
  area(): number {
    return this.length * this.width;
  }
  printArea(): void {
    console.log(`The area of Rectangle is ${this.area()}`);
  }
}

class Square implements Polygon {
  constructor(private side: number) {}
  area(): number {
    return this.side * this.side;
  }
  printArea(): void {
    console.log(`The area of Square is ${this.area()}`);
  }
}

const area = (poligon: Polygon) => {
  poligon.printArea();
};

function main() {
  area(new Triangle(10, 5));
  area(new Rectangle(10, 10));
  area(new Square(10));
}

main();
