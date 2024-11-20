import { Component, inject } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ICategoria } from '../../interfaces/icategoria.interface';
import { CategoriasService } from '../../services/categorias.service';

@Component({
  selector: 'app-formulario-suscripcion',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-suscripcion.component.html',
  styleUrl: './formulario-suscripcion.component.css'
})
export class FormularioSuscripcionComponent {
  miFormulario: FormGroup;
  arrCategorias: ICategoria[] = [];
  categoriasService = inject(CategoriasService);

  constructor() {
    this.miFormulario = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
        // Validators.email
      ]),
      categorias: new FormArray([
        ...this.arrCategorias.map(arrCategorias => new FormControl(false))
      ])
    });
    
  }

  async ngOnInit() {
    try {
      this.arrCategorias = await this.categoriasService.getAll();
    } catch (error) {
      console.log(error);
    }
  }

  getDataForm() {
    if (this.miFormulario.valid) {
      // const data = {
      //   email: this.miFormulario.value.email,
      //   categorias: this.arrCategorias.filter((_, index) => this.miFormulario.value.categorias[index])
      // }
      console.log('VALOR FORMULARIO ', this.miFormulario.value)
      this.miFormulario.reset();
    } else {
      this.miFormulario.markAllAsTouched();
    }
  }

  checkControl(formControlName: string, validator: string) {
    // return this.miFormulario.get(formControlName)?.touched;
    return this.miFormulario.get(formControlName)?.hasError(validator) && this.miFormulario.get(formControlName)?.touched;
  }
}
