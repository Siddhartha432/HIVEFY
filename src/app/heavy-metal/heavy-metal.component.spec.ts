import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeavyMetalComponent } from './heavy-metal.component';

describe('HeavyMetalComponent', () => {
  let component: HeavyMetalComponent;
  let fixture: ComponentFixture<HeavyMetalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeavyMetalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeavyMetalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
