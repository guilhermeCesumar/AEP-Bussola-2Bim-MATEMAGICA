import { Produto } from "./Produtos";

export class ArrayRandomValue {
  constructor(produtos: Produto[], numberOfRandomObjects: number) {
    this.produtos = produtos;
    this.numberOfRandomObjects = numberOfRandomObjects;
  }

  private produtos: Produto[];
  private produtosSortidos: Produto[];
  private numberOfRandomObjects: number;

  private randomObjects(productList: Produto[], numberOfRandomObjects: number) {
    let result: any = [];
    while (result.length < numberOfRandomObjects) {
      let randomIndex = Math.floor(Math.random() * productList.length);
      let randomObject: any = productList[randomIndex];
      if (!result.includes(randomObject)) {
        result.push(randomObject);
      }
    }
    return result;
  }

  private chooseRandomProducts(productList: Produto[], itensQuantity: number) {
    let randomProducts: any = [];
    while (randomProducts.length < itensQuantity) {
      let randomNumber = Math.floor(Math.random() * productList.length);
      let checkObjectValue = false;
      for (let i = 0; i < randomProducts.length; i++) {
        // validando se o numero aleatório está dentro do array auxiliar
        if (randomProducts[i] === productList[randomNumber]) {
          checkObjectValue = true;
        }
      }
      if (!checkObjectValue) randomProducts.push(productList[randomNumber]);
    }
    return randomProducts;
  }

  //   constructor(produtos: Produto[], numberOfRandomObjects: number) {
  //     this.produtos = produtos;
  //     this.numberOfRandomObjects = numberOfRandomObjects;
  //   }

  public getRandomObjects(): Produto[] {
    return this.randomObjects(this.produtos, this.numberOfRandomObjects);
  }

  public getChooseRandomProducts(): Produto[] {
    return this.chooseRandomProducts(this.produtos, this.numberOfRandomObjects);
  }

  public getProdutos(): Produto[] {
    return this.produtos;
  }

  public setProdutos(produtos: Produto[]): void {
    this.produtos = produtos;
  }

  public getProdutosSortidos(): Produto[] {
    return this.produtosSortidos;
  }

  public setProdutosSortidos(produtosSortidos: Produto[]): void {
    this.produtosSortidos = produtosSortidos;
  }

  public getNumberOfRandomObjects(): number {
    return this.numberOfRandomObjects;
  }

  public setNumberOfRandomObjects(numberOfRandomObjects: number): void {
    this.numberOfRandomObjects = numberOfRandomObjects;
  }
}
