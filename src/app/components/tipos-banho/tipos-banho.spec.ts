import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposBanho } from './tipos-banho';

describe('TiposBanho', () => {
  let component: TiposBanho;
  let fixture: ComponentFixture<TiposBanho>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TiposBanho]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiposBanho);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
