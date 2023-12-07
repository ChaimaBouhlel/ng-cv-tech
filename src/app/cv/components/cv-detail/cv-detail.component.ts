import {Component, Input} from '@angular/core';
import {Cv} from "../../models/Cv";

@Component({
  selector: 'app-cv-detail',
  templateUrl: './cv-detail.component.html',
  styleUrls: ['./cv-detail.component.css']
})
export class CvDetailComponent {

  @Input()
  cv: Cv | null = null;
}
