import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardincreaseComponent } from './cardincrease.component';

describe('CardincreaseComponent', () => {
  let component: CardincreaseComponent;
  let fixture: ComponentFixture<CardincreaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardincreaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardincreaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
