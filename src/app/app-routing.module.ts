import { AtualizarComponent } from './components/admin/atualizar/atualizar.component';
import { IncluirComponent } from './components/admin/incluir/incluir.component';
import { ListarComponent } from './components/admin/listar/listar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BuscaComponent } from './components/busca/busca.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ExcluirComponent } from './components/admin/excluir/excluir.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent,
    children: [
      //clientes
      //{ path: 'clientes', component:  },
      //voos
      //{ path: 'voos', component:  },

      //passagens
      { path: 'passagens', component: ListarComponent },
      { path: 'passagens/incluir', component: IncluirComponent },
      { path: 'passagens/atualizar/:id', component: AtualizarComponent },
      { path: 'passagens/excluir/:id', component: ExcluirComponent }
    ]
  },

  { path: 'login', component: LoginComponent },
  { path: 'busca', component: BuscaComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
