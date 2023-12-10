import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CvComponent} from './cv/components/cv/cv.component';
import {CvListComponent} from './cv/components/cv-list/cv-list.component';
import {CvCardComponent} from './cv/components/cv-card/cv-card.component';
import {CvItemComponent} from './cv/components/cv-item/cv-item.component';
import {NgOptimizedImage} from "@angular/common";
import {MiniWordComponent} from './components/miniWord/mini-word/mini-word.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ColorChangeDirective} from './directives/rainbow.directive';
import {RainbowTextComponent} from './components/rainbow-text/rainbow-text.component';
import {NavbarComponent} from './components/layout/navbar/navbar.component';
import {ROUTING} from "./app.routing";
import {CvDetailComponent} from './cv/components/cv-detail/cv-detail.component';
import {EmbaucheComponent} from "./cv/components/embauche/embauche.component";
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NotfoundComponent} from './components/notfound/notfound.component';
import {LoginComponent} from "./login/components/login.component";
import {DefaultImagePipe} from "./cv/pipes/default-image/default-image.pipe";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    declarations: [
        AppComponent,
        CvComponent,
        CvListComponent,
        CvCardComponent,
        CvItemComponent,
        MiniWordComponent,
        RainbowTextComponent,
        ColorChangeDirective,
        NavbarComponent,
        CvDetailComponent,
        EmbaucheComponent,
        NotfoundComponent,
        LoginComponent,
        DefaultImagePipe
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        NgOptimizedImage,
        FormsModule,
        ToastrModule.forRoot(),
        ROUTING,
        HttpClientModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
