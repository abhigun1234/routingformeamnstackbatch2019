import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponetnotfoundComponent } from './componetnotfound.component';

describe('ComponetnotfoundComponent', () => {
  let component: ComponetnotfoundComponent;
  let fixture: ComponentFixture<ComponetnotfoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponetnotfoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponetnotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
