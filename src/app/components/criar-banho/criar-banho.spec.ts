import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarBanho } from './criar-banho';

describe('CriarBanho', () => {
  let component: CriarBanho;
  let fixture: ComponentFixture<CriarBanho>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriarBanho]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarBanho);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
