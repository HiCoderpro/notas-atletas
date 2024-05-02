//Criando Classe Atleta
class Atleta {
    constructor(nome, notas) {
        this.nome = nome;
        this.notas = notas
    }obterNome(){
        return this.nome
    }obterNotasOrdenada(){
        return this.notas.slice().sort((a, b) => a - b)
    }

    calcularMediaNota() {
        let somaDasNotas = 0;

        for (let i = 0; i < this.atletas.length; i++) {
            somaDasNotas += this.atletas[i].nota;
        }

        const mediaNota = somaDasNotas / this.atletas.length;
        return mediaNota;
    }
}



//Lista de atletas abaixo
let atletas = [
    new Atleta("Cesar Abascal", [10, 9.34, 8.42, 10, 7.88]),
    new Atleta("Fernando Puntel", [8, 10, 10, 7, 9.33]),
    new Atleta("Daiane Jelinsky", [7, 10, 9.5, 9.5, 8]),
    new Atleta("Bruno Castro", [10, 10, 10, 9, 9.5])
   ];


