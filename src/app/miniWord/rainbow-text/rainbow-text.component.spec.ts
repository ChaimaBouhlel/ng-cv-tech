import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RainbowTextComponent } from './rainbow-text.component';

describe('RainbowTextComponent', () => {
  let component: RainbowTextComponent;
  let fixture: ComponentFixture<RainbowTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RainbowTextComponent]
    });
    fixture = TestBed.createComponent(RainbowTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
