import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvComponent } from './cvTech/cv/cv.component';
import { CvListComponent } from './cvTech/cv-list/cv-list.component';
import { CvCardComponent } from './cvTech/cv-card/cv-card.component';
import { CvItemComponent } from './cvTech/cv-item/cv-item.component';
import {NgOptimizedImage} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    CvListComponent,
    CvCardComponent,
    CvItemComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgOptimizedImage
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
