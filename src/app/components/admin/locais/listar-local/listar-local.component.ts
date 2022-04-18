import { Local } from 'src/models/locais.model';
import { LocaisService } from 'src/services/locais.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-local',
  templateUrl: './listar-local.component.html',
  styleUrls: ['./listar-local.component.css']
})
export class ListarLocalComponent implements OnInit {

  locais: Local[];
  colunas: string[] = ['id', 'nomeLocal', 'descricao', 'foto', 'acoes'];

  constructor(private service: LocaisService) {
    this.locais = [];
  }

  ngOnInit(): void {
    this.service.listar().subscribe(local => {
      this.locais = local;
    });
  }
}