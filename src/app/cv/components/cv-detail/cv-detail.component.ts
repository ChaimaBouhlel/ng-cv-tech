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
    cv: Cv | null = null;

    constructor(
        private cvService: CvService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private toastr: ToastrService
    ) {
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe({
            next: (params) => {
                const cvId = +params['id']; // Convert id to a number
                const cv = this.cvService.getCvById(cvId);

                if (cv) {
                    this.cv = cv;
                } else {
                    // Handle the case where Cv is not found, for example, navigate to a not-found page or show an error message.
                    this.toastr.error(`Cv with id ${cvId} not found.`);
                    this.router.navigate(['NotFound']);
                }
            }
        })
    }
}
