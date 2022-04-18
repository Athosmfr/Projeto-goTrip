import { EditarLocalComponent } from './components/admin/locais/editar-local/editar-local.component';
import { ExcluirLocalComponent } from './components/admin/locais/excluir-local/excluir-local.component';
import { IncluirLocalComponent } from './components/admin/locais/incluir-local/incluir-local.component';
import { ListarLocalComponent } from './components/admin/locais/listar-local/listar-local.component';
import { ExcluirViagemComponent } from './components/admin/viagens/excluir-viagem/excluir-viagem.component';
import { IncluirViagemComponent } from './components/admin/viagens/incluir-viagem/incluir-viagem.component';
import { ListarViagemComponent } from './components/admin/viagens/listar-viagem/listar-viagem.component';
import { ExcluirPassagemComponent } from './components/admin/passagens/excluir-passagem/excluir-passagem.component';
import { EditarPassagemComponent } from './components/admin/passagens/editar-passagem/editar-passagem.component';
import { IncluirPassagemComponent } from './components/admin/passagens/incluir-passagem/incluir-passagem.component';
import { ListarPassagemComponent } from './components/admin/passagens/listar-passagem/listar-passagem.component';
import { EditarVooComponent } from './components/admin/voos/editar-voo/editar-voo.component';
import { ExcluirVooComponent } from './components/admin/voos/excluir-voo/excluir-voo.component';
import { IncluirVooComponent } from './components/admin/voos/incluir-voo/incluir-voo.component';
import { ListarVooComponent } from './components/admin/voos/listar-voo/listar-voo.component';
import { EditarCliComponent } from './components/admin/clientes/editar-cli/editar-cli.component';
import { ExcluirCliComponent } from './components/admin/clientes/excluir-cli/excluir-cli.component';
import { IncluirCliComponent } from './components/admin/clientes/incluir-cli/incluir-cli.component';
import { ListarCliComponent } from './components/admin/clientes/listar-cli/listar-cli.component';

import { BuscaComponent } from './components/busca/busca.component';
import { AdminComponent } from './components/admin/admin.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'busca', component: BuscaComponent },
  {
    path: 'admin', component: AdminComponent,
    children: [
      //clientes
      { path: 'clientes', component: ListarCliComponent },
      { path: 'clientes/incluir', component: IncluirCliComponent },
      { path: 'clientes/excluir/:id', component: ExcluirCliComponent },
      { path: 'clientes/editar/:id', component: EditarCliComponent },

      //voos
      { path: 'voos', component: ListarVooComponent },
      { path: 'voos/incluir', component: IncluirVooComponent },
      { path: 'voos/excluir/:id', component: ExcluirVooComponent },
      { path: 'voos/editar/:id', component: EditarVooComponent },

      //passagens
      { path: 'passagens', component: ListarPassagemComponent },
      { path: 'passagens/incluir', component: IncluirPassagemComponent },
      { path: 'passagens/excluir/:id', component: ExcluirPassagemComponent },
      { path: 'passagens/editar/:id', component: EditarPassagemComponent },

      //viagens
      { path: 'viagens', component: ListarViagemComponent },
      { path: 'viagens/incluir', component: IncluirViagemComponent },
      { path: 'viagens/excluir/:id', component: ExcluirViagemComponent },
      { path: 'viagens/editar/:id', component: ListarViagemComponent },

      //locais
      { path: 'locais', component: ListarLocalComponent },
      { path: 'locais/incluir', component: IncluirLocalComponent },
      { path: 'locais/excluir/:id', component: ExcluirLocalComponent },
      { path: 'locais/editar/:id', component: EditarLocalComponent },

      { path: '**', component: NotFoundComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }