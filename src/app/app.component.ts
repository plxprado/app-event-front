import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
 
})
export class AppComponent {
  title = 'app-event-front';
  constructor(private modalService: NgbModal) {}

 
  openModel(content: any) : void{
    this.modalService.open(content, { centered: true });
  }
}
