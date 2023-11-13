import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvComponent } from './cvTech/cv/cv.component';
import { CvListComponent } from './cvTech/cv-list/cv-list.component';
import { CvCardComponent } from './cvTech/cv-card/cv-card.component';
import { CvItemComponent } from './cvTech/cv-item/cv-item.component';
import {NgOptimizedImage} from "@angular/common";
import { MiniWordComponent } from './miniWord/mini-word/mini-word.component';
import {FormsModule} from "@angular/forms";
import {ColorChangeDirective} from './directives/rainbow.directive';
import { RainbowTextComponent } from './miniWord/rainbow-text/rainbow-text.component';

@NgModule({
    declarations: [
        AppComponent,
        CvComponent,
        CvListComponent,
        CvCardComponent,
        CvItemComponent,
        MiniWordComponent,
        RainbowTextComponent,
        ColorChangeDirective
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgOptimizedImage,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
