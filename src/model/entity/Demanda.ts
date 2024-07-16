import Cliente from "./Cliente.js";
import Desenvolvedor from "./Desenvolvedor.js";

export default class Demanda {
    #id: number;
    static idGen: number = 0;
    #tipoDemanda: string;
    #tipoSuporte: string;
    #geraGanho: string;
    #desenvolvedor: Desenvolvedor;
    #cliente: Cliente;
    #dataInicio: Date;
    #dataFim: Date;
    #status: string;


    constructor(tipoDemanda: string, tipoSuporte: string, geraGanho: string, desenvolvedor: Desenvolvedor, cliente: Cliente, dataInicio: Date, dataFim: Date){
        Demanda.idGen++;
        this.#id = Demanda.idGen;
        this.#tipoDemanda = tipoDemanda;
        this.#tipoSuporte = tipoSuporte;
        this.#geraGanho = geraGanho;
        this.#desenvolvedor = desenvolvedor;
        this.#cliente = cliente;
        this.#dataInicio = dataInicio;
        this.#dataFim = dataFim;
        this.#status = "Não iniciado";
    }

    get id() {
        return this.#id;
    }
    
    get tipoDemanda() {
        return this.#tipoDemanda;
    }
    
      get tipoSuporte() {
        return this.#tipoSuporte;
      }
    
      get geraGanho() {
        return this.#geraGanho;
      }
    
      get desenvolvedor() {
        return this.#desenvolvedor;
      }
    
      get cliente() {
        return this.#cliente;
      }
    
      get dataInicio() {
        return this.#dataInicio;
      }
    
      get dataFim() {
        return this.#dataFim;
      }
    
      get status() {
        return this.#status;
      }
    
      set id(id) {
        this.#id = id;
    }


      set tipoDemanda(value) {
        this.#tipoDemanda = value;
      }
    
      set tipoSuporte(value) {
        this.#tipoSuporte = value;
      }
    
      set geraGanho(value) {
        this.#geraGanho = value;
      }
    
      set desenvolvedor(value) {
        this.#desenvolvedor = value;
      }
    
      set cliente(value) {
        this.#cliente = value;
      }
    
      set dataInicio(value) {
        this.#dataInicio = value;
      }
    
      set dataFim(value) {
        this.#dataFim = value;
      }
    
      set status(value) {
        this.#status = value;
      }

      toString() {
        return `Demanda {id: ${this.#id}, tipoDemanda: ${this.#tipoDemanda}, tipoSuporte: ${this.#tipoSuporte}, geraGanho: ${this.#geraGanho},
          desenvolvedor: ${this.#desenvolvedor}, cliente: ${this.#cliente}, dataInicio: ${this.#dataInicio}, dataFim: ${this.#dataFim}, status: ${this.#status}}`;
      }
}

