import Cliente from "../entity/Cliente.js";

export default class ClienteService{
    clientes: Cliente[];
    
    constructor(){
        this.clientes = [];
    }

    criarCliente(matricula: number, nome: string, email: string, gestor: string, senha: string){
        let cliente = new Cliente(matricula, nome, email, gestor, senha);
        this.clientes.push(cliente);
        return 'Usuário cliente criado'
    }

    listarClientes(){
        this.clientes.forEach(cliente => {
            console.log(cliente.toString());
        })
    }

    listarCliente(matCliente: number){
        this.clientes.forEach(cliente => {
            if(cliente.matricula === matCliente){
                console.log(cliente.toString());
            }
        })
    }
}