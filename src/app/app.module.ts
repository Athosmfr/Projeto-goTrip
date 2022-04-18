import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";

//Material Components
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input'
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';

//pipes
import { FormatoRealPipe } from './formato-real.pipe';

//404
import { NotFoundComponent } from './components/not-found/not-found.component';

//components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { BuscaComponent } from './components/busca/busca.component';
import { EditarCliComponent } from './components/admin/clientes/editar-cli/editar-cli.component';
import { ExcluirCliComponent } from './components/admin/clientes/excluir-cli/excluir-cli.component';
import { IncluirCliComponent } from './components/admin/clientes/incluir-cli/incluir-cli.component';
import { ListarCliComponent } from './components/admin/clientes/listar-cli/listar-cli.component';
import { ListarLocalComponent } from './components/admin/locais/listar-local/listar-local.component';
import { ExcluirLocalComponent } from './components/admin/locais/excluir-local/excluir-local.component';
import { IncluirLocalComponent } from './components/admin/locais/incluir-local/incluir-local.component';
import { EditarLocalComponent } from './components/admin/locais/editar-local/editar-local.component';
import { EditarPassagemComponent } from './components/admin/passagens/editar-passagem/editar-passagem.component';
import { IncluirPassagemComponent } from './components/admin/passagens/incluir-passagem/incluir-passagem.component';
import { ExcluirPassagemComponent } from './components/admin/passagens/excluir-passagem/excluir-passagem.component';
import { ListarPassagemComponent } from './components/admin/passagens/listar-passagem/listar-passagem.component';
import { ListarVooComponent } from './components/admin/voos/listar-voo/listar-voo.component';
import { IncluirVooComponent } from './components/admin/voos/incluir-voo/incluir-voo.component';
import { ExcluirVooComponent } from './components/admin/voos/excluir-voo/excluir-voo.component';
import { EditarVooComponent } from './components/admin/voos/editar-voo/editar-voo.component';
import { EditarViagemComponent } from './components/admin/viagens/editar-viagem/editar-viagem.component';
import { ListarViagemComponent } from './components/admin/viagens/listar-viagem/listar-viagem.component';
import { ExcluirViagemComponent } from './components/admin/viagens/excluir-viagem/excluir-viagem.component';
import { IncluirViagemComponent } from './components/admin/viagens/incluir-viagem/incluir-viagem.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    AdminComponent,
    LoginComponent,
    FormatoRealPipe,
    NotFoundComponent,
    BuscaComponent,
    EditarCliComponent,
    ExcluirCliComponent,
    IncluirCliComponent,
    ListarCliComponent,
    ListarLocalComponent,
    ExcluirLocalComponent,
    IncluirLocalComponent,
    EditarLocalComponent,
    EditarPassagemComponent,
    IncluirPassagemComponent,
    ExcluirPassagemComponent,
    ListarPassagemComponent,
    ListarVooComponent,
    IncluirVooComponent,
    ExcluirVooComponent,
    EditarVooComponent,
    EditarViagemComponent,
    ListarViagemComponent,
    ExcluirViagemComponent,
    IncluirViagemComponent,
  ],
  imports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatNativeDateModule,
    MatInputModule,
    MatAutocompleteModule,
    MatSliderModule,
    MatTableModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
