import { Cliente } from './../../../../../models/clinte.model';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/services/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-cli',
  templateUrl: './editar-cli.component.html',
  styleUrls: ['./editar-cli.component.css']
})
export class EditarCliComponent implements OnInit {

  cliente: Cliente = new Cliente();

  constructor(private service: ClienteService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.service.buscarPorId(Number(id)).subscribe(cliente => {
      this.cliente = cliente;
    });

  }

  atualizarCliente() {
    this.service.atualizar(this.cliente.id, this.cliente).subscribe(() => {
      this.router.navigate(['/admin/clientes']);
    });
  }

}
