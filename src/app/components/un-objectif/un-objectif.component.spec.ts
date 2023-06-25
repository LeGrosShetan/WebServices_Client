import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnObjectifComponent } from './un-objectif.component';

describe('UnObjectifComponent', () => {
  let component: UnObjectifComponent;
  let fixture: ComponentFixture<UnObjectifComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnObjectifComponent]
    });
    fixture = TestBed.createComponent(UnObjectifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
