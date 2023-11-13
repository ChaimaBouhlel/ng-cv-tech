import {Component, Input} from '@angular/core';
import {Cv} from "../model/cv";

@Component({
  selector: 'app-cv-card',
  templateUrl: './cv-card.component.html',
  styleUrls: ['./cv-card.component.css']
})
export class CvCardComponent {
  @Input({
    required: true,
  })
  cv: Cv | null = null;
}
