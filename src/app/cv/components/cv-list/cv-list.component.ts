import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Cv} from "../../models/Cv";

@Component({
  selector: 'app-cv-list',
  templateUrl: './cv-list.component.html',
  styleUrls: ['./cv-list.component.css']
})
export class CvListComponent {
  @Input() cvs: Cv[] | null = [];
  @Output()
  forwardCv = new EventEmitter();

  onSelectCv(cv: Cv): void  {
    console.log(cv);

    this.forwardCv.emit(cv);
  }
}
