import Desenvolvedor from "../entity/Desenvolvedor.js";

export default class DesenvolvedorService{
    desenvolvedores: Desenvolvedor[]
    constructor() {
        this.desenvolvedores = [];
    }

    criarDesenvolvedor(matricula: number, nome: string, email: string, gestor: string, senha: string){
      let desenvolvedor = new Desenvolvedor(matricula, nome, email, gestor, senha);
      this.desenvolvedores.push(desenvolvedor);
      return 'Usuário Desenvolvedor criado';
    }

    listarDesenvolvedores(){
      this.desenvolvedores.forEach(desenvolvedor => {
        console.log(desenvolvedor.toString());
      });
    }

    listarDesenvolvedor(matricula: number){
      this.desenvolvedores.forEach(desenvolvedor => {
        if(desenvolvedor.matricula === matricula){
          console.log(desenvolvedor.toString());
      }}); 
    }
    
    inativarDesenvolvedor(matDev: Desenvolvedor){
      matDev.inativar();
    }
}