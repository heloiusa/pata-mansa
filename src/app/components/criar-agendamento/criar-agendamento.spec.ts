import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarAgendamento } from './criar-agendamento';

describe('CriarAgendamento', () => {
  let component: CriarAgendamento;
  let fixture: ComponentFixture<CriarAgendamento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriarAgendamento]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarAgendamento);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
