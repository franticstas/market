import { Injectable } from '@angular/core'
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
} from '@angular/router'
import { AuthService } from '../services/auth.service'

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private authService: AuthService) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean {
        const isLogged = this.authService.isLoggedIn()

        if (isLogged) {
            return true
        }

        this.router.navigate(['auth'])
        return false
    }
}
