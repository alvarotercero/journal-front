import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-suscripcion',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-suscripcion.component.html',
  styleUrl: './formulario-suscripcion.component.css'
})
export class FormularioSuscripcionComponent {
  miFormulario: FormGroup;
  constructor() {
    this.miFormulario = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      esAceptado: new FormControl(false, [
        Validators.required
      ])
    }, [])
  }

  getDataForm() {
    console.log(this.miFormulario.value);
    if (this.miFormulario.valid) {
      this.miFormulario.reset()
    }
  }

  checkControl(formControlName: string, validator: string) {
    return this.miFormulario.get(formControlName)?.hasError(validator) && this.miFormulario.get(formControlName)?.touched;
  }
}
