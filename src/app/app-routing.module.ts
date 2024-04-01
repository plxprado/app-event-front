import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SagaWorkflowComponent } from './components/saga-workflow/saga-workflow.component';

const routes: Routes = [
  { path: "sagawf", component: SagaWorkflowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
