import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  miBusqueda: FormGroup;
  router = inject(Router)
  constructor() {
    this.miBusqueda = new FormGroup({
      texto: new FormControl(null, [
        Validators.minLength(3),
        Validators.required
      ])
    }, [])
  }

  buscar() {
    // console.log(this.miBusqueda.get('texto')?.value);
    if (this.miBusqueda.valid) {
      this.router.navigate(['/busqueda'], { queryParams: { q: this.miBusqueda.get('texto')?.value } })
    }

  }

  checkControl(formControlName: string, validator: string) {
    // return this.miFormulario.get(formControlName)?.touched;
    return this.miBusqueda.get(formControlName)?.hasError(validator) && this.miBusqueda.get(formControlName)?.touched;
  }
}
