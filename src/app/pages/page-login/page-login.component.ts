import { Component, inject, } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsuariosService } from '../../services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './page-login.component.html',
  styleUrl: './page-login.component.css'
})
export class PageLoginComponent {
  loginForm: FormGroup;
  usersService = inject(UsuariosService)
  router = inject(Router)
  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      contraseña: new FormControl(null, [])
    }, [])
  }

  async getDataLogin() {
    try {
      console.log(this.loginForm.value);

      let response: any = await this.usersService.login(this.loginForm.value)
      console.log(response);
      localStorage.setItem('token', response.token);
      this.router.navigate(['/dashboard'])

    } catch (error: any) {
      console.log(error.error.message);
    }
  }
}
