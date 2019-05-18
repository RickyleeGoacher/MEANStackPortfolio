import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  expire: any = sessionStorage.getItem('expire');

  constructor(private userService: UserService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {

      if (this.userService.loggedIn && Date.now() / 1000 < this.expire) { 
        return true; 
      } else {

        if(sessionStorage.getItem('token')) {
          sessionStorage.removeItem('token')
          sessionStorage.removeItem('expire')
          this.userService.logout();
          this.router.navigate(['/login']);
          return false;
        } else {
        console.log('Access Denied!')
        this.router.navigate(['/login']);
        return false;
        }
    }
  }
}
