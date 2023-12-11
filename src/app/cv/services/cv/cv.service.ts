import {Injectable} from '@angular/core';
import {Cv} from '../../models/Cv';
import {HttpClient} from "@angular/common/http";
import {ConstantsConfig} from "../../../config/constants.config";
import {catchError, map, Observable, of} from "rxjs";
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root',
})
export class CvService {

  cvs: Cv[];

  constructor(private httpClient: HttpClient, private toastr: ToastrService) {
    this.cvs = [
      new Cv(1, "Nott", "Angela", 145, 'teacher', "", 45),
      new Cv(2, "Zider", "Amy", 450, 'enfant', 'cv.png', 5),
      new Cv(3, "Chovey", "Lily", 12, 'student', "chaima.jpg", 21),
      new Cv(4, "Doe", "John", 1, 'student', "profile-img-2.jpg", 23),
    ];
  }

  getStaticCvs(): Cv[] {
    return this.cvs;
  }

  getCvs(): Observable<Cv[]> {
    return this.httpClient.get<Cv[]>(ConstantsConfig.cvUrl).pipe(
      map((cvs) => {
        this.cvs = cvs;
        return cvs;
      }),
      catchError(() => {
        this.toastr.error('Erreur de récupération de données');
        return of(this.cvs);
      })
    );
  }

  getCvById(id: number) {
    return this.httpClient.get<Cv>(ConstantsConfig.cvUrl + `/${id}`);
  }

  deleteCv(id: number) {
    return this.httpClient.delete(ConstantsConfig.cvUrl + `/${id}`);
  }

}
