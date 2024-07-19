import Desenvolvedor from "../entity/Desenvolvedor.js";

export default class DesenvolvedorService{
    private desenvolvedores: Desenvolvedor[] = [];
    constructor() {
        this.desenvolvedores = [];
    }

    criarDesenvolvedor(
      matricula: number,
      nome: string,
      email: string,
      gestor: string,
      senha: string
    ): string {
      let desenvolvedor = new Desenvolvedor(matricula, nome, email, gestor, senha);
      this.desenvolvedores.push(desenvolvedor);
      return 'Usuário Desenvolvedor criado';
    }

    listarDesenvolvedores(): Desenvolvedor[]{
      return this.desenvolvedores;
      // this.desenvolvedores.forEach(desenvolvedor => {
      //   console.log(desenvolvedor.toString());
      // });
    }

    listarDesenvolvedor(matricula: number){
      return this.desenvolvedores.find(desenvolvedor => desenvolvedor.getMatricula === matricula);
      // this.desenvolvedores.forEach(desenvolvedor => {
      //   return desenvolvedor.getMatricula === matricula
      // }) 
    }
    
    inativarDesenvolvedor(matDev: number){
      const desenvolvedor = this.listarDesenvolvedor(matDev);
      if(desenvolvedor != undefined){
          desenvolvedor.inativar();
          return 'Perfil de Desenvolvedor desativado'
      }
        return 'Não conseguimos desativar o usuário' 
    }
}