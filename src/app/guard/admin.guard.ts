import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminauthService } from '../services/adminauth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivateChild {
  constructor (private AdminauthService: AdminauthService, private router:Router){

  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
    if (this.AdminauthService.checkLogin())
    {
      return true;
    } else {
      alert('bạn không phải là admin')
      this.router.navigate(['clients/home']);
      return false;
    }
  }
  
}
