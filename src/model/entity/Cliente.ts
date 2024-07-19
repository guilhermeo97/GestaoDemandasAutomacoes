import Usuario from "./Usuario.ts";

export default class Cliente extends Usuario{
    constructor(matricula: number, nome: string, email: string, gestor: string, senha: string){
       super(matricula, nome, email, gestor, senha)
    }
}