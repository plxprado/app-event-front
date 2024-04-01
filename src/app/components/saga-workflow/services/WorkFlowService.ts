import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class WorkFlowService {

    constructor(private http: HttpClient) {

    }

  
    cadastrar(workflowName : any) {
        var payload = {
            workflow_name : workflowName.inputWorkflowName
        }
        return this.http.post('http://localhost:8069/api/saga/workflow', payload)
        .subscribe((response: any) => {
            console.log(response);
        });
    }   
}