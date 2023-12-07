import {Component, Input} from '@angular/core';
import {Cv} from "../../models/Cv";
import {EmbaucheService} from "../../services/emauche/embauche.service";

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css']
})
export class EmbaucheComponent {

  @Input()
  embauches: Cv[] = []
  constructor(private embaucheService: EmbaucheService) {
  }

  ngOnInit(): void {
    this.embauches = this.embaucheService.getCvs();
  }
}
