import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayinarrayComponent } from './arrayinarray.component';

describe('ArrayinarrayComponent', () => {
  let component: ArrayinarrayComponent;
  let fixture: ComponentFixture<ArrayinarrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrayinarrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayinarrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
