import {Component} from '@angular/core';
import {AuthenticationService} from "../../../login/services/authentication.service";
import {Observable} from "rxjs";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
    isLoggedIn$: Observable<boolean>;
    isLoggedOut$: Observable<boolean>;

    constructor(private authenticationService: AuthenticationService) {
        this.isLoggedIn$ = this.authenticationService.isLoggedIn$;
        this.isLoggedOut$ = this.authenticationService.isLoggedOut$;
    }
    logout(){
        this.authenticationService.logout();
    }
}
