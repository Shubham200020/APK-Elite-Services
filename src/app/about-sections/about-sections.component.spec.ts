import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSectionsComponent } from './about-sections.component';

describe('AboutSectionsComponent', () => {
  let component: AboutSectionsComponent;
  let fixture: ComponentFixture<AboutSectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutSectionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
