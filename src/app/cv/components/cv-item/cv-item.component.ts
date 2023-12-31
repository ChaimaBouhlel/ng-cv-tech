import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Cv} from "../../models/Cv";

@Component({
  selector: 'app-cv-item',
  templateUrl: './cv-item.component.html',
  styleUrls: ['./cv-item.component.css']
})
export class CvItemComponent {
  @Input({
    required: true,
  })
  cv: Cv | null = null;
  @Output()
  selectCv = new EventEmitter<Cv>();

  onSelectCv() {
    if (this.cv) this.selectCv.emit(this.cv);
  }
}
