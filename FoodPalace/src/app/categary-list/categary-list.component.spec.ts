import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategaryListComponent } from './categary-list.component';

describe('CategaryListComponent', () => {
  let component: CategaryListComponent;
  let fixture: ComponentFixture<CategaryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategaryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategaryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
