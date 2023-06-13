export class Matemagica {
  public constructor() {}

  private num1: Number;
  private num2: Number;

  public getNum1() {
    return this.num1;
  }

  public setNum1(num1: Number) {
    this.num1 = num1;
  }

  public getNum2() {
    return this.num2;
  }

  public setNum2(num2: Number) {
    this.num2 = num2;
  }

  public adição(num1, num2) {
    if (
      typeof this.getNum1() !== "number" ||
      typeof this.getNum2() !== "number"
    ) {
      return "É preciso que os dois parâmetros sejam números";
    }

    return num1 + num2;
  }

  public subtração(num1, num2) {
    if (
      typeof this.getNum1() !== "number" ||
      typeof this.getNum2() !== "number"
    ) {
      return "É preciso que os dois parâmetros sejam números";
    }
    return num1 - num2;
  }

  public divisão(num1, num2) {
    if (
      typeof this.getNum1() !== "number" ||
      typeof this.getNum2() !== "number"
    ) {
      return "É preciso que os dois parâmetros sejam números";
    }

    if (this.getNum1() === 0 || this.getNum2() === 0) {
      return "Não é possível dividir por zero";
    }

    return num1 / num2;
  }

  public multiplicação(num1, num2) {
    if (
      typeof this.getNum1() !== "number" ||
      typeof this.getNum2() !== "number"
    ) {
      return "É preciso que os dois parâmetros sejam números";
    }
    return num1 * num2;
  }

  public getAdição() {
    return this.adição(this.getNum1(), this.getNum2());
  }

  public getSubtração() {
    return this.subtração(this.getNum1(), this.getNum2());
  }

  public getDivisão() {
    return this.divisão(this.getNum1(), this.getNum2());
  }

  public getMultiplicação() {
    return this.multiplicação(this.getNum1(), this.getNum2());
  }
}
