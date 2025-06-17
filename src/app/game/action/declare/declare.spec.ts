import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Declare } from './declare';

describe('Declare', () => {
  let component: Declare;
  let fixture: ComponentFixture<Declare>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Declare]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Declare);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
