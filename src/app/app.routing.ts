import { RouterModule, Routes } from "@angular/router";
import {CvComponent} from "./cv/components/cv/cv.component";
import {MiniWordComponent} from "./components/miniWord/mini-word/mini-word.component";
import {CvCardComponent} from "./cv/components/cv-card/cv-card.component";
import {RainbowTextComponent} from "./components/rainbow-text/rainbow-text.component";

const APP_ROUTING: Routes = [
  {
    path:'cv',children: [
      {path: '', component: CvComponent},
      {path: ':id', component: CvCardComponent},
    ]
  }
  ,
  {path: '', component: CvComponent},
  {path: 'word', component: MiniWordComponent},
  {path: 'rainbow', component: RainbowTextComponent},
  // {path: 'login', component: LoginComponent},
  // {path: 'NotFound', component: ErrorComponent},
  // {path: '**', component: ErrorComponent},
];

export const ROUTING =RouterModule.forRoot(APP_ROUTING);
