import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { LocaisService } from 'src/services/locais.service';
import { Local } from 'src/models/locais.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  locais: Local[] = [];

  constructor(private locaisService: LocaisService) { }

  ngOnInit(): void {
    this.locaisService.listar().subscribe(locais => {
      this.locais = locais;
    });
  }
}