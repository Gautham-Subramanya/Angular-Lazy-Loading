import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookauthoringComponent } from './bookauthoring.component';

describe('BookauthoringComponent', () => {
  let component: BookauthoringComponent;
  let fixture: ComponentFixture<BookauthoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookauthoringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookauthoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
