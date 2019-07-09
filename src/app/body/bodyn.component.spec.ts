import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodynComponent } from './bodyn.component';

describe('BodynComponent', () => {
  let component: BodynComponent;
  let fixture: ComponentFixture<BodynComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodynComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodynComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
