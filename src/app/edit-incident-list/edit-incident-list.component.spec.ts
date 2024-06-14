import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditIncidentListComponent } from './edit-incident-list.component';

describe('EditIncidentListComponent', () => {
  let component: EditIncidentListComponent;
  let fixture: ComponentFixture<EditIncidentListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditIncidentListComponent]
    });
    fixture = TestBed.createComponent(EditIncidentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
