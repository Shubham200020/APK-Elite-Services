import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWhyChooseComponent } from './add-why-choose.component';

describe('AddWhyChooseComponent', () => {
  let component: AddWhyChooseComponent;
  let fixture: ComponentFixture<AddWhyChooseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddWhyChooseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddWhyChooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
