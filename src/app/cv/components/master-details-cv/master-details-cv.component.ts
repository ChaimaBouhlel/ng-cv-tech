import {Component, inject} from '@angular/core';
import {catchError, Observable, of} from "rxjs";
import {Cv} from "../../models/Cv";
import {CvService} from "../../services/cv/cv.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-master-details-cv',
  templateUrl: './master-details-cv.component.html',
  styleUrls: ['./master-details-cv.component.css']
})
export class MasterDetailsCvComponent {

  cvs$: Observable<Cv[]>
  cvService = inject(CvService);
  toaster = inject(ToastrService);
  router = inject(Router);

  constructor(){
    this.cvs$ = this.cvService.getCvs().pipe(
      catchError((res)=> {
        this.toaster.error('Erreur de récupération de donnés');
        return of(res);
      })
    )
  }

  onForwardCv(cv: Cv) {
    this.router.navigate(['cv', 'list', cv.id]);
  }
}
