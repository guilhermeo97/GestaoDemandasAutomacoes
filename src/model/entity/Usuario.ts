export default abstract class Usuario {
    private matricula: number;
    private nome: string;
    private email: string;
    private gestor: string;
    private ativo: boolean;
    private senha: string;

    constructor(matricula: number, nome: string, email: string, gestor: string, senha: string){
        this.matricula = matricula;
        this.nome = nome;
        this.email = email;
        this.gestor  = gestor;
        this.ativo = true;
        this.senha = senha;
    }

    get getMatricula(){
        return this.matricula;
    }

    get getNome(){
        return this.nome;
    }

    get getEmail(){
        return this.email;
    }

    get getGestor(){
        return this.gestor;
    }

    get getAtivo(){
        return this.ativo;
    }

    get getSenha(){
        return this.senha;
    }

    set setNome(nome: string){
        this.nome = nome;
    }

    set setEmail(novoEmail: string){
        this.email = novoEmail;
    }

    set setGestor(gestor: string){
        this.gestor = gestor;
    }

    set setSenha(senha: string){
        this.senha = senha;
    }

    inativar(){
        this.ativo = false;
    }

    toString(){
        return `${this.matricula}, ${this.nome}, ${this.email}, ${this.gestor}, ${this.ativo}, ${this.senha}`;
    }
}
