import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeasersComponent } from './ceasers.component';

describe('CeasersComponent', () => {
  let component: CeasersComponent;
  let fixture: ComponentFixture<CeasersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeasersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeasersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
