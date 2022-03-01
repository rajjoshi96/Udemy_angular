import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvbarComponent } from './advbar.component';

describe('AdvbarComponent', () => {
  let component: AdvbarComponent;
  let fixture: ComponentFixture<AdvbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
