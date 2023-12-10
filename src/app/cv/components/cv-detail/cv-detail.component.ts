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
    cv!: Cv ;

    constructor(
        private cvService: CvService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private toastr: ToastrService
    ) {
    }

    ngOnInit() {
        const cvId = +this.activatedRoute.snapshot.params['id'];

        this.cvService.getCvById(cvId).subscribe({
            next: (cv) => (this.cv = cv),
            error: (error) => {
                // console.log(error);
                this.toastr.error(`le cv n'existe pas`);
                this.router.navigate(['cv']);
            },
        });
        /*
        //with subscribe
        this.activatedRoute.params.subscribe({
            next: (params) => {
                const cvId = +params['id']; // Convert id to a number
                const cv = this.cvService.getCvById(cvId);

                if (cv) {
                    this.cv = cv;
                } else {
                    this.toastr.error(`Cv with id ${cvId} not found.`);
                    this.router.navigate(['NotFound']);
                }
            }
        })
          */
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
