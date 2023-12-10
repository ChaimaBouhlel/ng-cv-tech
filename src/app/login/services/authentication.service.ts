import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, map, Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {UserLogin} from "../models/UserLogin";
import {User} from "../models/User";
import {ConstantsConfig} from "../../config/constants.config";

@Injectable({
    providedIn: 'root',
})
export class AuthenticationService {
    public isLoggedIn$: Observable<boolean>;
    public isLoggedOut$: Observable<boolean>;
    private api = ConstantsConfig.loginUrl;
    private currentUserSubject = new BehaviorSubject<User | null>(null);
    public currentUser$ = this.currentUserSubject.asObservable();

    constructor(private http: HttpClient) {

        this.isLoggedIn$ = this.currentUserSubject.pipe(
            map((res) => {
                return res !== null;
            })
        )
        this.isLoggedOut$ = this.currentUserSubject.pipe(
            map((user) => !user)
        );
        const storedUser = localStorage.getItem('user');
        if (storedUser !== null) {
            this.currentUserSubject.next(JSON.parse(storedUser));
        } else {
            this.logout();
        }
    }

    login(credentials: UserLogin): Observable<User> {
        return this.http.post<User>(this.api, credentials).pipe(
            tap((user) => {
                localStorage.setItem('user', JSON.stringify(user));
                this.currentUserSubject.next(user);
            })
        );
    }

    logout() {
        localStorage.removeItem('user');
        this.currentUserSubject.next(null);
    }
}
