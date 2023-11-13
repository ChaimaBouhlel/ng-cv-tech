import { Component } from '@angular/core';
import {Cv} from "../model/cv";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent {
  selectedCv: Cv | null = null;
  cvs: Cv[] = [
    new Cv(1, "Nott", "Angela", "as.jpg"),
    new Cv(2, "Zider", "Amy", "cv.png"),
    new Cv(2, "Chovey", "Lily", "chaima.jpg"),
    new Cv(2, "Doe", "John", ""),
  ];
  onForwardCv(cv: Cv) {
    this.selectedCv = cv;
    console.log(cv);
  }
}
