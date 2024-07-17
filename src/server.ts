import Cliente from "./model/entity/Cliente.ts";
import Desenvolvedor from "./model/entity/Desenvolvedor.ts";
import Demanda from "./model/entity/Demanda.ts";
import DesenvolvedorService from "./model/service/DesenvolvedorService.ts";

let cliente = new Cliente(24823, "Guilherme Oliveira", "guilherme.oliveira@randoncorp.com", "Édel", "Morango@2024");
let desenvolvedor = new Desenvolvedor(24823, "Guilherme Oliveira", "guilherme.oliveira@randoncorp.com", "Édel", "Morango@2024");
let demanda = new Demanda("Novo Desenvolviento", "vazio" , "Produtividade", desenvolvedor, cliente, new Date('2024-07-12T00:00:00Z'), new Date('2024-09-15T00:00:00Z'));

const desenvolvedorService = new DesenvolvedorService();
desenvolvedorService.criarDesenvolvedor(24823, "Guilherme Oliveira", "guilherme.oliveira@randoncorp.com", "Édel", "Morango@2024");
desenvolvedorService.listarDesenvolvedores();
console.log('---------------')
desenvolvedorService.listarDesenvolvedor(24823);
console.log(process.env.DB)