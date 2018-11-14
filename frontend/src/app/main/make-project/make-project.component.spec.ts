import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeProjectComponent } from './make-project.component';

describe('MakeProjectComponent', () => {
  let component: MakeProjectComponent;
  let fixture: ComponentFixture<MakeProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
