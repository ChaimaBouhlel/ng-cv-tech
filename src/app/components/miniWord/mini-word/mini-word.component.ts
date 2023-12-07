import {Component} from '@angular/core';
import {FontFamily} from "../models/miniWordModels";

@Component({
  selector: 'app-mini-word',
  templateUrl: './mini-word.component.html',
  styleUrls: ['./mini-word.component.css']
})
export class MiniWordComponent {
  color: string = "palevioletred";
  size: number = 20;
  fontFamily: FontFamily= FontFamily.ARIAL
  fontFamilies = Object.values(FontFamily);
}
