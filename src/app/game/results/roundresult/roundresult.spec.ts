import {ComponentFixture, TestBed} from '@angular/core/testing';

import {Roundresult} from './roundresult';

describe('Roundresult', () => {
  let component: Roundresult;
  let fixture: ComponentFixture<Roundresult>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Roundresult]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Roundresult);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
