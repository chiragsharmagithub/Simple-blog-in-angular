import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraPageComponent } from './extra-page.component';

describe('ExtraPageComponent', () => {
  let component: ExtraPageComponent;
  let fixture: ComponentFixture<ExtraPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtraPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExtraPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
