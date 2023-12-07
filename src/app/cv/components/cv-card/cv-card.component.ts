import {Component, Input} from '@angular/core';
import {Cv} from "../../models/Cv";
import {EmbaucheService} from "../../services/emauche/embauche.service";

@Component({
  selector: 'app-cv-card',
  templateUrl: './cv-card.component.html',
  styleUrls: ['./cv-card.component.css']
})
export class CvCardComponent {
  @Input({
    required: true,
  })
  cv: Cv | null = null;

  constructor(private embaucheService: EmbaucheService) {
  }
  embaucher(){
    this.embaucheService.addCv(this.cv as Cv);
  }
}
