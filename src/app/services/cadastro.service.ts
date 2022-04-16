import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Local } from '../../models/locais.model';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private http: HttpClient) { }

  URL = "http://localhost:3001/locais"

  listarLocais() : Observable<Local[]>{    
    return this.http.get<Local[]>(this.URL);
  }

  buscarPorId(id : number): Observable<Local>{
    return this.http.get<Local>(this.URL + "/" + id)
  }

  incluirLocal(local : Local) {
    this.http.post(this.URL, local);
  }

  atualizarLocal(local: Local, id : number) {
    this.http.put(this.URL + "/" + id, local);
  }

  excluirLocal(id : number) {
    this.http.delete(this.URL + "/" + id);
  }
}
