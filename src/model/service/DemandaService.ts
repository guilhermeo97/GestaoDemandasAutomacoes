import Cliente from "../entity/Cliente.js";
import Demanda from "../entity/Demanda.js"
import Desenvolvedor from "../entity/Desenvolvedor.js";

export default class DemandaService{
    demandas: any[];

    constructor(){
        this.demandas = []
    }

    cadastrarDemanda(tipoDemanda: string, tipoSuporte: string, geraGanho: string, desenvolvedor: Desenvolvedor, cliente: Cliente, dataInicio: Date, dataFim: Date){
        let demanda = new Demanda(tipoDemanda, tipoSuporte, geraGanho, desenvolvedor, cliente, dataInicio, dataFim);
        this.demandas.push(demanda);
        return 'Demanda criada';
    }


    listarDemandas(){
        this.demandas.forEach(demanda => {
            console.log(demanda.toString());
        })
    }

    listarDemanda(id: number){
        return this.demandas.forEach(demanda => demanda.id === id);
    }

}