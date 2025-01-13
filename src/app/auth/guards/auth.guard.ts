import { AuthService } from './../services/users.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChildFn, CanMatch, CanMatchFn, Route, GuardResult, MaybeAsync, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { Observable, pipe, tap } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanMatch, CanActivate {
    constructor(
        private authService:AuthService,
        private router:Router,
    ) { }

private checkAuthStatus(): boolean| Observable<boolean>{

return this.authService.checkAuthentication()
.pipe(
    tap(isAuthenticated =>console.log('Authenticated',isAuthenticated)),
    tap(isAuthenticated => {
        if(!isAuthenticated) {
            this.router.navigate(['./auth/login'])
        }
        }
    ),
)
}

    canMatch(route: Route, segments: UrlSegment[]): boolean|Observable<boolean> {
    //    console.log('Can Match')
      //  console.log({route,segments})

return this.checkAuthStatus();
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  boolean|Observable<boolean> {
   //     console.log('Can Activated')
   //     console.log({route, state})

return this.checkAuthStatus();
    }
  
    
}