import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpprojectComponent } from './httpproject.component';

describe('HttpprojectComponent', () => {
  let component: HttpprojectComponent;
  let fixture: ComponentFixture<HttpprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpprojectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
