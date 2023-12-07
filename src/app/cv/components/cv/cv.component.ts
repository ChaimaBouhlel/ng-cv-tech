import {Component, inject} from '@angular/core';
import {Cv} from "../../models/Cv";
import {CvService} from "../../services/cv/cv.service";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent {
  cvService = inject(CvService);
  selectedCv: Cv | null = null;
  cvs: Cv[] = this.cvService.getInitialCvs();
  constructor() {
  }
  onForwardCv(cv: Cv) {
    this.selectedCv = cv;
    console.log(cv);
  }
}
