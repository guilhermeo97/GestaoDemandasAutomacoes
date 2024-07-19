import express from 'express';
import helmet from 'helmet';
import path from 'path';
import Cliente from "./model/entity/Cliente.ts";
import Desenvolvedor from "./model/entity/Desenvolvedor.ts";
import Demanda from "./model/entity/Demanda.ts";
import DesenvolvedorService from "./model/service/DesenvolvedorService.ts";

const server = express();
server.use(helmet()); // adiciona rheaders e camada extra de proteção
server.use(express.json()); // avisa que a resposta virá em json
server.use(express.urlencoded({extended: true})); // habilita por exemplo conseguir enviar body em métodos put
//server.use(express.static(path.join(__dirname, '../public')));

let cliente = new Cliente(24823, "Guilherme Oliveira", "guilherme.oliveira@randoncorp.com", "Édel", "Morango@2024");
let desenvolvedor = new Desenvolvedor(24823, "Guilherme Oliveira", "guilherme.oliveira@randoncorp.com", "Édel", "Morango@2024");
let demanda = new Demanda("Novo Desenvolviento", "vazio" , "Produtividade", desenvolvedor, cliente, new Date('2024-07-12T00:00:00Z'), new Date('2024-09-15T00:00:00Z'));

//server.get('/', (req, resp) =>{
    const desenvolvedorService = new DesenvolvedorService();
    desenvolvedorService.criarDesenvolvedor(24823, "Guilherme Oliveira", "guilherme.oliveira@randoncorp.com", "Édel", "Morango@2024");
    const pesquisaDev = desenvolvedorService.listarDesenvolvedores();;
    console.log(pesquisaDev);
    console.log('---------------');
    console.log(desenvolvedorService.listarDesenvolvedor(24823));
    console.log('---------------');
    console.log(desenvolvedorService.inativarDesenvolvedor(24823));
    console.log(desenvolvedorService.listarDesenvolvedor(24823));
//server.listen(3000, () => {
//    console.log('Servidor está rodando na porta: 3000')
//})

// const desenvolvedorService = new DesenvolvedorService();
// desenvolvedorService.criarDesenvolvedor(24823, "Guilherme Oliveira", "guilherme.oliveira@randoncorp.com", "Édel", "Morango@2024");
// desenvolvedorService.listarDesenvolvedores();
// console.log('---------------')
// desenvolvedorService.listarDesenvolvedor(24823);