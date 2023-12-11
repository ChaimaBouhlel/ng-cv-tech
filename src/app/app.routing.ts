import { RouterModule, Routes } from "@angular/router";
import {CvComponent} from "./cv/components/cv/cv.component";
import {MiniWordComponent} from "./components/miniWord/mini-word/mini-word.component";
import {RainbowTextComponent} from "./components/rainbow-text/rainbow-text.component";
import {CvDetailComponent} from "./cv/components/cv-detail/cv-detail.component";
import {NotfoundComponent} from "./components/notfound/notfound.component";
import {LoginComponent} from "./login/components/login.component";
import {cvResolver} from "./cv/resolvers/cv/cv.resolver";
import {detailsResolver} from "./cv/resolvers/details/details.resolver";

const APP_ROUTING: Routes = [
  {
    path:'cv',children: [
      { path: '', component: CvComponent, resolve: { cvs: cvResolver } },
      {path: ':id', component: CvDetailComponent,  resolve: { details: detailsResolver }},
    ]
  }
  ,
  {path: '', component: CvComponent},
  {path: 'word', component: MiniWordComponent},
  {path: 'rainbow', component: RainbowTextComponent},
  {path: 'components', component: LoginComponent},
  {path: 'NotFound', component: NotfoundComponent},
  {path: '**', component: NotfoundComponent},
];

export const ROUTING =RouterModule.forRoot(APP_ROUTING);
