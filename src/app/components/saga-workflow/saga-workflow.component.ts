import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { WorkFlowService } from './services/WorkFlowService';

@Component({
  selector: 'app-saga-workflow',
  templateUrl: './saga-workflow.component.html',
  styleUrl: './saga-workflow.component.scss'
})
export class SagaWorkflowComponent implements OnInit {
    workflowService: any;

    ngOnInit(): void {
    }


    workflow = new FormGroup({
      inputWorkflowName: new FormControl<string>('')
    });

    constructor(private workFlowService: WorkFlowService) {
    }

    cadastrarWorkFlow() : void{
      this.workFlowService.cadastrar(this.workflow.value);
      
    }
        




   
}
