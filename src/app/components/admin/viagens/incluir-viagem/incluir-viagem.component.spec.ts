import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncluirViagemComponent } from './incluir-viagem.component';

describe('IncluirViagemComponent', () => {
  let component: IncluirViagemComponent;
  let fixture: ComponentFixture<IncluirViagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncluirViagemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncluirViagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
