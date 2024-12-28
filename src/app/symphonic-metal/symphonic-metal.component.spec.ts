import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SymphonicMetalComponent } from './symphonic-metal.component';

describe('SymphonicMetalComponent', () => {
  let component: SymphonicMetalComponent;
  let fixture: ComponentFixture<SymphonicMetalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SymphonicMetalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SymphonicMetalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
