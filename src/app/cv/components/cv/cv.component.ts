import {Component} from '@angular/core';
import {Cv} from "../../models/Cv";
import {CvService} from "../../services/cv/cv.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent {
  selectedCv: Cv | null = null;
  cvs: Cv[] = this.cvService.getStaticCvs();
  cvs$!: Observable<Cv[]>;
  constructor(private cvService: CvService) {}
  ngOnInit() {
    this.cvs$ = this.cvService.getCvs();
  }
  onForwardCv(cv: Cv) {
    this.selectedCv = cv;
    console.log(cv);
  }
}
