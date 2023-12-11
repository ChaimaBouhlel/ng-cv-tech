import {Component} from '@angular/core';
import {Cv} from "../../models/Cv";
import {CvService} from "../../services/cv/cv.service";
import {Observable} from "rxjs";
import {EmbaucheService} from "../../services/emauche/embauche.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent {
  selectedCv: Cv | null = null;
  cvs: Cv[] = this.cvService.getStaticCvs();
  juniors: Cv[];
  seniors: Cv[];
  cvs$!: Observable<Cv[]>;
  date: Date = new Date();
  embauches$: Observable<Cv[]>;
  constructor(private cvService: CvService,
              private embaucheService: EmbaucheService,
              private activatedRoute: ActivatedRoute
  ) {
    const cvs : Cv[] = this.activatedRoute.snapshot.data['cvs'];

    this.embauches$ = this.embaucheService.embauches$;
    this.juniors = cvs.filter((cv) => cv.age < 40);
    this.seniors = cvs.filter((cv) => cv.age >= 40);
    this.cvs = this.juniors;
    console.log(this.cvs);
    console.log(this.juniors);
    console.log(this.seniors);
  }
  ngOnInit() {
    this.cvs$ = this.cvService.getCvs();
  }

  displaySeniors() {
    this.cvs = this.seniors;
  }

  displayJuniors() {
    this.cvs = this.juniors;
  }

  onForwardCv(cv: Cv) {
    this.selectedCv = cv;
    console.log(cv);
  }
}
