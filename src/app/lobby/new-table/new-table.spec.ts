import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTable } from './new-table';

describe('NewTable', () => {
  let component: NewTable;
  let fixture: ComponentFixture<NewTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
