import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterApprenantComponent } from './ajouter-apprenant.component';

describe('AjouterApprenantComponent', () => {
  let component: AjouterApprenantComponent;
  let fixture: ComponentFixture<AjouterApprenantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterApprenantComponent]
    });
    fixture = TestBed.createComponent(AjouterApprenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
