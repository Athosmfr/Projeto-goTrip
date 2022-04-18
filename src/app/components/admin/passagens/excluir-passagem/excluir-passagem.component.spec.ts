import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirPassagemComponent } from './excluir-passagem.component';

describe('ExcluirPassagemComponent', () => {
  let component: ExcluirPassagemComponent;
  let fixture: ComponentFixture<ExcluirPassagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcluirPassagemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcluirPassagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
