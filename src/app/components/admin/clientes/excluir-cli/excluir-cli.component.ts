import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from 'src/services/cliente.service';
import { Cliente } from 'src/models/clinte.model';

@Component({
  selector: 'app-excluir-cli',
  templateUrl: './excluir-cli.component.html',
  styleUrls: ['./excluir-cli.component.css']
})
export class ExcluirCliComponent implements OnInit {

  cliente: Cliente = new Cliente();

  constructor(private service: ClienteService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.service.buscarPorId(Number(id)).subscribe(cliente => {
      this.cliente = cliente;
    });

  }

  excluirCliente() {
    this.service.excluir(this.cliente.id).subscribe(() => {
      this.router.navigate(['/admin/clientes']);
    });
  }

}