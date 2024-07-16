import Usuario from "./Usuario.js";

export default class Desenvolvedor extends Usuario{
    constructor(matricula: number, nome: string, email: string, gestor: string, senha: string){
       super(matricula, nome, email, gestor, senha)
    }
}