import {Component, Input} from '@angular/core';
import {Cv} from "../../models/Cv";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {CvService} from "../../services/cv/cv.service";

@Component({
  selector: 'app-cv-detail',
  templateUrl: './cv-detail.component.html',
  styleUrls: ['./cv-detail.component.css']
})
export class CvDetailComponent {

  @Input()
  cv!: Cv;

  constructor(
    private cvService: CvService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService
  ) {
  }

  ngOnInit() {

    /*
    const cv: Cv = this.activatedRoute.snapshot.data['details'];
    this.cv = cv;
    if (cv == null) {
      this.toastr.error('Aucun cv trouvé');
      this.router.navigate(['cv']);
    }
    this.cv = cv;
    */

    // const cvId = +this.activatedRoute.snapshot.params['id'];
    //
    //
    // this.cvService.getCvById(cvId).subscribe({
    //   next: (cv) => (this.cv = cv),
    //   error: (error) => {
    //     // console.log(error);
    //     this.toastr.error(`le cv n'existe pas`);
    //     this.router.navigate(['cv']);
    //   },
    // });

    this.activatedRoute.data.subscribe((data:any) => {
      if (data['cv'] == null) {
        this.toastr.error('Aucun cv trouvé');
        this.router.navigate(['']);
      }
      this.cv = data['cv'];
    });

  }

  delete() {
    this.cvService.deleteCv(this.cv.id).subscribe({
        next: (response) => {
          this.router.navigate(['cv']);
        }
        ,
        error: (error) => {
          console.log(error);
          this.toastr.error("Erreur lors de la suppression du cv");
        }
      }
    );
  }
}
