import Cliente from "../entity/Cliente.ts";
import Demanda from "../entity/Demanda.ts";
import Desenvolvedor from "../entity/Desenvolvedor.ts";
import DesenvolvedorService from "./DesenvolvedorService.ts";
import ClienteService from "./ClienteService.ts";

export default class DemandaService {
    demandas: Demanda[] = [];
    private desenvolvedorService = new DesenvolvedorService();
    private clienteService = new ClienteService();

    constructor() {
        this.demandas = [];
    }

    cadastrarDemanda(tipoDemanda: string, tipoSuporte: string, geraGanho: string, 
        desenvolvedor: Desenvolvedor, cliente: Cliente, dataInicio: Date, dataFim: Date) {
        //const desenvolvedor: Desenvolvedor | undefined = this.desenvolvedorService.listarDesenvolvedor(id_desenvolvedor);
        //const cliente: Cliente | undefined = this.clienteService.listarCliente(id_cliente);
        
        // console.log(`Desenvolvedor encontrado: ${desenvolvedor}`);
        // console.log(`Cliente encontrado: ${cliente}`);
        
        // if (!desenvolvedor) {
        //     throw new Error(`Desenvolvedor com ID ${id_desenvolvedor} não encontrado`);
        // }
    
        // if (!cliente) {
        //     throw new Error(`Cliente com ID ${id_cliente} não encontrado`);
        // }
    
        let demanda = new Demanda(tipoDemanda, tipoSuporte, geraGanho, desenvolvedor, cliente, dataInicio, dataFim);
        console.log(`Demanda criada: ${JSON.stringify(demanda)}`);
        this.demandas.push(demanda);
        return 'Demanda criada';
    }
    

    listarDemandas(): Demanda[] {
        return this.demandas;
    }

    listarDemanda(id: number) {
        return this.demandas.find(demanda => demanda.getId === id);
    }
}
