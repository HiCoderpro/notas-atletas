class Atleta {
    constructor(nome, notas) {
      this.nome = nome;
      this.notas = notas;
    }
  
    //Pegamos o nome dos atletas
    obterNome() {
      return this.nome;
    }
    //Obtemos nossa lista em ordem ordenadas ou seja do menor ao maior!
    obterNotasOrdenadas() {
      return this.notas.slice().sort((a, b) => a - b);
    }
  
    obterNotasValidas() {
      const notasOrdenadas = this.obterNotasOrdenadas();
      return notasOrdenadas.slice(1, 4);
    }
    
    obterMediaValida() {
      const notasValidas = this.obterNotasValidas();
      return notasValidas.reduce((soma, nota) => soma + nota, 0) / notasValidas.length;
    }

  }
  
  // Array de objetos de atletas
  const atletas = [
    new Atleta("Cesar Abascal", [10, 9.34, 8.42, 10, 7.88]),
    new Atleta("Fernando Puntel", [8, 10, 10, 7, 9.33]),
    new Atleta("Daiane Jelinsky", [7, 10, 9.5, 9.5, 8]),
    new Atleta("Bruno Castro", [10, 10, 10, 9, 9.5])
  ];
  
  // Exemplo de uso
  for (let i = 0; i < atletas.length; i++) {
    const primeiroAtleta = atletas[i];
    console.log(`Atleta: `,primeiroAtleta.obterNome());
    console.log(`Notas Obtidas: `, primeiroAtleta.obterNotasOrdenadas());
    console.log(`Média Válida: `,primeiroAtleta.obterMediaValida());
    console.log(`        `)
}

  