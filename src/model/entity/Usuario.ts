export default class Usuario {
    #matricula: number;
    #nome: string;
    #email: string;
    #gestor: string;
    #ativo: boolean;
    #senha: string;

    constructor(matricula: number, nome: string, email: string, gestor: string, senha: string){
        this.#matricula = matricula;
        this.#nome = nome;
        this.#email = email;
        this.#gestor  = gestor;
        this.#ativo = true;
        this.#senha = senha
    }

    get matricula(){
        return this.#matricula;
    }

    get nome(){
        return this.#nome;
    }

    get email(){
        return this.#email;
    }

    get gestor(){
        return this.#gestor;
    }

    get ativo(){
        return this.#ativo;
    }

    get senha(){
        return this.#senha;
    }

    set nome(nome){
        this.#nome = nome;
    }

    set email(email){
        this.#email = email;
    }

    set gestor(gestor){
        this.#gestor = gestor;
    }

    set senha(senha){
        this.#senha = senha;
    }

    inativarCliente(){
        this.#ativo = false;
    }

    toString(){
        return `${this.#matricula}, ${this.#nome}, ${this.#email}, ${this.#gestor}, ${this.#ativo}, ${this.senha}`
    }
}