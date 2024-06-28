import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenswearComponent } from './womenswear.component';

describe('WomenswearComponent', () => {
  let component: WomenswearComponent;
  let fixture: ComponentFixture<WomenswearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WomenswearComponent]
    });
    fixture = TestBed.createComponent(WomenswearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
