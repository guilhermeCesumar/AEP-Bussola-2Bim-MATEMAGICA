export class Produto {
  constructor(nome: string, qtde: number, preco: number) {
    this.nome = nome;
    this.qtde = qtde;
    this.preco = preco;
  }

  private nome: string;
  private qtde: number;
  private preco: number;

  public getNome(): string {
    return this.nome;
  }

  public getQtde(): number {
    return this.qtde;
  }

  public getPreco(): number {
    return this.preco;
  }

  public setNome(nome: string): void {
    this.nome = nome;
  }

  public setQtde(qtde: number): void {
    this.qtde = qtde;
  }

  public setPreco(preco: number): void {
    this.preco = preco;
  }
}
