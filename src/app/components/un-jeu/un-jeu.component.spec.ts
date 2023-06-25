import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnJeuComponent } from './un-jeu.component';

describe('UnJeuComponent', () => {
  let component: UnJeuComponent;
  let fixture: ComponentFixture<UnJeuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnJeuComponent]
    });
    fixture = TestBed.createComponent(UnJeuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
