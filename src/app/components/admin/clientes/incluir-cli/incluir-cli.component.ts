import { ClienteService } from '../../../../../services/cliente.service';
import { Cliente } from './../../../../../models/clinte.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-incluir-cli',
  templateUrl: './incluir-cli.component.html',
  styleUrls: ['./incluir-cli.component.css']
})
export class IncluirCliComponent implements OnInit {

  cliente: Cliente = new Cliente();

  constructor(private service: ClienteService, private router: Router) { }

  salvarCliente(){
    this.service.incluir(this.cliente).subscribe(() => {
      this.router.navigate(['/admin/clientes']);
    });
  }

  ngOnInit(): void {
  }

}