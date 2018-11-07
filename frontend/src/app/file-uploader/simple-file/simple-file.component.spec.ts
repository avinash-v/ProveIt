import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleFileComponent } from './simple-file.component';

describe('SimpleFileComponent', () => {
  let component: SimpleFileComponent;
  let fixture: ComponentFixture<SimpleFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
