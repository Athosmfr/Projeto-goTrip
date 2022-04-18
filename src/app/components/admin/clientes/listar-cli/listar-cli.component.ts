import { ClienteService } from '../../../../../services/cliente.service';
import { Cliente } from '../../../../../models/clinte.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-cli',
  templateUrl: './listar-cli.component.html',
  styleUrls: ['./listar-cli.component.css']
})
export class ListarCliComponent implements OnInit {

  clientes: Cliente[];
  colunas: string[] = ['id', 'nome', 'idade', 'acoes'];

  constructor(private service: ClienteService) {
    this.clientes = [];
  }

  ngOnInit(): void {
    this.service.listar().subscribe(cliente => {
      this.clientes = cliente;
    });
  }
}