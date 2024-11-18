import { Component, } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;





  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl('erase una vez', [Validators.required, Validators.email]),
      password: new FormControl(null, [])
    }, [])
  }

  getDataLogin() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value)
    } else {
      console.log("el formulario no es valido");
    }


  }
}
