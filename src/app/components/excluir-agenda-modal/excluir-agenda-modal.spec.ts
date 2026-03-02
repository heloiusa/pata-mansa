import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirAgendaModal } from './excluir-agenda-modal';

describe('ExcluirAgendaModal', () => {
  let component: ExcluirAgendaModal;
  let fixture: ComponentFixture<ExcluirAgendaModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExcluirAgendaModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcluirAgendaModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
