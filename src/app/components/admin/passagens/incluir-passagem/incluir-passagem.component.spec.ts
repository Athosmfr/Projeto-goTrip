import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncluirPassagemComponent } from './incluir-passagem.component';

describe('IncluirPassagemComponent', () => {
  let component: IncluirPassagemComponent;
  let fixture: ComponentFixture<IncluirPassagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncluirPassagemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncluirPassagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
