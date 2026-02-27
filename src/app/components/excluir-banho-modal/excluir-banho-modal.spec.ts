import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirBanhoModal } from './excluir-banho-modal';

describe('ExcluirBanhoModal', () => {
  let component: ExcluirBanhoModal;
  let fixture: ComponentFixture<ExcluirBanhoModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExcluirBanhoModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcluirBanhoModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
