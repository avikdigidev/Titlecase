import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlecaseconverterComponent } from './titlecaseconverter.component';

describe('TitlecaseconverterComponent', () => {
  let component: TitlecaseconverterComponent;
  let fixture: ComponentFixture<TitlecaseconverterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitlecaseconverterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitlecaseconverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
