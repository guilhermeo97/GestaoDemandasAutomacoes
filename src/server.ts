import express from 'express';
import helmet from 'helmet';
//import path from 'path';
import DesenvolvedorService from "./model/service/DesenvolvedorService.ts";
import ClienteService from "./model/service/ClienteService.ts";
import DemandaService from './model/service/DemandaService.ts';
//import Database from './config/database.ts';

const server = express();
server.use(helmet()); // adiciona rheaders e camada extra de proteção
server.use(express.json()); // avisa que a resposta virá em json
server.use(express.urlencoded({extended: true})); // habilita por exemplo conseguir enviar body em métodos put
//server.use(express.static(path.join(__dirname, '../public')));

    const demandaService = new DemandaService();
    const clienteService = new ClienteService();
    const desenvolvedorService = new DesenvolvedorService();

//server.get('/', (req, resp) =>{
    
    desenvolvedorService.criarDesenvolvedor(24823, "Guilherme Oliveira", "guilherme.oliveira@randoncorp.com", "Édel", "Morango@2024");
    desenvolvedorService.criarDesenvolvedor(41937, "Daniele Zanoni", "daniele.zanoni@randoncorp.com", "Rochane", "Morango@2024");
    clienteService.criarCliente(24823, "Guilherme Oliveira", "guilherme.oliveira@randoncorp.com", "Édel", "Morango@2024");
    let cliente = clienteService.listarCliente(24823);
    let desenvolvedor = desenvolvedorService.listarDesenvolvedor(24823);
    demandaService.cadastrarDemanda("Novo Desenvolviento", "vazio" , "Produtividade", desenvolvedor, cliente, new Date('2024-07-12T00:00:00Z'), new Date('2024-09-15T00:00:00Z'));
    
    
    console.log('Buscar Desenvolvedor');
    console.log(desenvolvedorService.listarDesenvolvedor(24823));
    console.log('---------------');
    console.log();
    console.log();
    console.log('Buscar Cliente');
    console.log(clienteService.listarCliente(24823));
    
    console.log('---------------');
    console.log(demandaService.listarDemandas());
//server.listen(3000, () => {
//    console.log('Servidor está rodando na porta: 3000')
//})

// const desenvolvedorService = new DesenvolvedorService();
// desenvolvedorService.criarDesenvolvedor(24823, "Guilherme Oliveira", "guilherme.oliveira@randoncorp.com", "Édel", "Morango@2024");
// desenvolvedorService.listarDesenvolvedores();
// console.log('---------------')
// desenvolvedorService.listarDesenvolvedor(24823);