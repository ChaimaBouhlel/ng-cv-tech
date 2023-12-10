import { Injectable } from '@angular/core';
import { Cv } from '../../models/Cv';
@Injectable({
  providedIn: 'root',
})
export class CvService {

  cvs: Cv[] = [
    new Cv(1, "Nott", "Angela", 145, 'teacher', "", 45),
    new Cv(2, "Zider", "Amy", 450, 'enfant', 'cv.png', 5),
    new Cv(3, "Chovey", "Lily", 12, 'student', "chaima.jpg", 21),
    new Cv(4, "Doe", "John",  1, 'student', "profile-img-2.jpg", 23),
  ];

  constructor() {
  }

  getInitialCvs (): Cv[] {
    return this.cvs;
  }

  getCvById(id: number): Cv {
    const index = this.cvs.findIndex((cv) => cv.id === id);
    return this.cvs[index];
  }
}
