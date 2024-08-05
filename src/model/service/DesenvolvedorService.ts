import Desenvolvedor from "../entity/Desenvolvedor.ts";

export default class DesenvolvedorService{
  
  desenvolvedores: Desenvolvedor[] = [];
  
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
    }

    public listarDesenvolvedor(matricula: number): Desenvolvedor | undefined{
      return this.desenvolvedores.find(desenvolvedor => desenvolvedor.getMatricula === matricula); 
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