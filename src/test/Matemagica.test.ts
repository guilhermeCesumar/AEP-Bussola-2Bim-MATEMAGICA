import { Matemagica } from "../TDD/Matemagica";
import { describe, test, expect } from "@jest/globals";

//adição

describe("Somatória de dois valores numéricos", () => {
  test("Deve retornar a somatória de dois valores", () => {
    const matemagica = new Matemagica();

    matemagica.setNum1(1);
    matemagica.setNum2(2);

    expect(matemagica.getAdição()).toBe(3);
  });

  test("Deve retornar um erro ao somar uma string com um número", () => {
    const matemagica = new Matemagica();

    expect(matemagica.adição("aaa", 2)).toBe(
      "É preciso que os dois parâmetros sejam números"
    );
  });
});

//subtração

describe("Subtração de dois valores numéricos", () => {
  test("Deve retornar a subtração de dois valores", () => {
    const matemagica = new Matemagica();

    matemagica.setNum1(3);
    matemagica.setNum2(2);

    expect(matemagica.getSubtração()).toBe(1);
  });

  test("Deve retornar um erro ao subtrair uma string com um número", () => {
    const matemagica = new Matemagica();

    expect(matemagica.subtração("aaa", 2)).toBe(
      "É preciso que os dois parâmetros sejam números"
    );
  });
});

//divisão

describe("Divisão de dois valores numéricos", () => {
  test("Deve retornar a divisão de dois valores", () => {
    const matemagica = new Matemagica();

    matemagica.setNum1(10);
    matemagica.setNum2(2);

    expect(matemagica.getDivisão()).toBe(5);
  });

  test("Deve retornar um erro ao dividir por zero", () => {
    const matemagica = new Matemagica();

    matemagica.setNum1(10);
    matemagica.setNum2(0);

    expect(matemagica.getDivisão()).toBe("Não é possível dividir por zero");
  });

  test("Deve retornar um erro ao dividir uma string com um número", () => {
    const matemagica = new Matemagica();

    expect(matemagica.divisão("aaa", 2)).toBe(
      "É preciso que os dois parâmetros sejam números"
    );
  });
});

//multiplicação

describe("Multiplicação de dois valores numéricos", () => {
  test("Deve retornar a multiplicação de dois valores", () => {
    const matemagica = new Matemagica();

    matemagica.setNum1(5);
    matemagica.setNum2(2);

    expect(matemagica.getMultiplicação()).toBe(10);
  });

  test("Deve retornar um erro ao multiplicar uma string com um número", () => {
    const matemagica = new Matemagica();

    expect(matemagica.multiplicação("aaa", 2)).toBe(
      "É preciso que os dois parâmetros sejam números"
    );
  });
});
