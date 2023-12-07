import {inject, Injectable} from '@angular/core';
import {Cv} from '../../models/Cv';
import {ToastrService} from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {

  toast = inject(ToastrService)
  private embauches: Cv[] = [];

  constructor() {
  }

  getCvs() {
    return this.embauches;
  }

  addCv(cv: Cv) {
    let embauches = this.embauches;
    if (embauches.findIndex((c) => c.id == cv.id) == -1) {
      this.embauches.push(cv)
      this.toast.success(`Le candidat ${cv.firstname} ${cv.name} a été ajouté`)
    } else {
      this.toast.warning(`Le candidat ${cv.firstname} ${cv.name} est déja embauché`)
    }
  }

  deleteCv(id: number) {
    let embauches = this.embauches;
    const index = embauches.findIndex((cv) => cv.id == id)
    if (index !== -1) {
      embauches.splice(index, 1)
      this.toast.success('Candidat supprimé')
    } else {
      this.toast.warning('Candidat non trouvé')
    }
  }
}
