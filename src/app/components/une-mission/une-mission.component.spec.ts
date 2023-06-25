import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UneMissionComponent } from './une-mission.component';

describe('UneMissionComponent', () => {
  let component: UneMissionComponent;
  let fixture: ComponentFixture<UneMissionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UneMissionComponent]
    });
    fixture = TestBed.createComponent(UneMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
