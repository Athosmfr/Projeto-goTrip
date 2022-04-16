import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { CadastroService } from 'src/app/services/cadastro.service';
import { Local } from 'src/models/locais.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  locais: Observable<Local[]> = new Observable<Local[]>();
  URL: string = "http://localhost:3001/locais/";

  constructor(private service: CadastroService) { }

  ngOnInit(): void {

  }

}
