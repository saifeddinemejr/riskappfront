import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddincidentComponent } from './addincident.component';

describe('addincidentComponent', () => {
  let component: AddincidentComponent;
  let fixture: ComponentFixture<AddincidentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddincidentComponent]
    });
    fixture = TestBed.createComponent(AddincidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
