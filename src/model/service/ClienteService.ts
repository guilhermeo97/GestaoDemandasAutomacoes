import Cliente from "../entity/Cliente.ts";

export default class ClienteService{
    clientes: Cliente[] = [];
    
    constructor(){
        this.clientes = [];
    }

    criarCliente(matricula: number, nome: string, email: string, gestor: string, senha: string){
        let cliente = new Cliente(matricula, nome, email, gestor, senha);
        this.clientes.push(cliente);
        return 'Usuário cliente criado';
    }

    listarClientes(): Cliente[]{
        return this.clientes;
    }
  
      listarCliente(matricula: number): Cliente | undefined{
        return this.clientes.find(cliente => cliente.getMatricula === matricula); 
      }
      
      inativarCliente(matCliente: number){
        const cliente = this.listarCliente(matCliente);
        if(cliente != undefined){
            cliente.inativar();
            return 'Perfil de Cliente desativado'
        }
          return 'Não conseguimos desativar o usuário' 
      }
}