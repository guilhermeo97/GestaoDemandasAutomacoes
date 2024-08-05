import Cliente from "./Cliente.ts";
import Desenvolvedor from "./Desenvolvedor.ts";

export default class Demanda {
    private static idCounter = 0;
    private id: number;
    private tipoDemanda: string;
    private tipoSuporte: string;
    private geraGanho: string;
    private desenvolvedor: Desenvolvedor | undefined;
    private cliente: Cliente | undefined;
    private dataInicio: Date;
    private dataFim: Date;

    constructor(tipoDemanda: string, tipoSuporte: string, geraGanho: string, desenvolvedor: Desenvolvedor, cliente: Cliente, dataInicio: Date, dataFim: Date) {
      Demanda.idCounter++;
      this.id = Demanda.idCounter;
      this.tipoDemanda = tipoDemanda;
      this.tipoSuporte = tipoSuporte;
      this.geraGanho = geraGanho;
      this.desenvolvedor = desenvolvedor;
      this.cliente = cliente;
      this.dataInicio = dataInicio;
        this.dataFim = dataFim;
    }

    get getId() {
        return this.id;
    }

    get getTipoDemanda() {
        return this.tipoDemanda;
    }

    get getTipoSuporte() {
        return this.tipoSuporte;
    }

    get getGeraGanho() {
        return this.geraGanho;
    }

    get getDesenvolvedor() {
        return this.desenvolvedor;
    }

    get getCliente() {
        return this.cliente;
    }

    get getDataInicio() {
        return this.dataInicio;
    }

    get getDataFim() {
        return this.dataFim;
    }
}
