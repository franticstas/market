import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { FormBuilder } from '@angular/forms'
import { AuthService } from 'src/app/shared/services/auth.service'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
    loginForm = this.fb.group({
        email: [''],
        password: [''],
    })

    constructor(private fb: FormBuilder, private authService: AuthService) {}

    ngOnInit(): void {}

    login(): void {
        const data = this.loginForm.value

        this.authService.login(data)
    }
}
