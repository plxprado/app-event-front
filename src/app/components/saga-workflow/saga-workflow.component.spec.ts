import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SagaWorkflowComponent } from './saga-workflow.component';

describe('SagaWorkflowComponent', () => {
  let component: SagaWorkflowComponent;
  let fixture: ComponentFixture<SagaWorkflowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SagaWorkflowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SagaWorkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
