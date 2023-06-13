import { Produto } from "../TDD/Produtos";
import { ArrayRandomValue } from "../TDD/ArrayRandomValue";
import { describe, test, expect } from "@jest/globals";

describe("Gera um array de produtos aleatórios do tamanho informado", () => {
  test("Deve retornar um array de produtos aleatórios, do tamanho informado", () => {
    const produtos = new Array<Produto>();
    produtos.push(new Produto("Produto 1", 1, 1));
    produtos.push(new Produto("Produto 2", 2, 2));
    produtos.push(new Produto("Produto 3", 3, 3));
    produtos.push(new Produto("Produto 4", 4, 4));
    produtos.push(new Produto("Produto 5", 5, 5));

    const arrayRandomValue = new ArrayRandomValue(produtos, 4);
    const numberOfRandomObjects = 5;

    arrayRandomValue.setProdutos(produtos);
    arrayRandomValue.setNumberOfRandomObjects(numberOfRandomObjects);

    const randomObjects = arrayRandomValue.getRandomObjects();
    expect(randomObjects.length).toBe(numberOfRandomObjects);
  });
});
