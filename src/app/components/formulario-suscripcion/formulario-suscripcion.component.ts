import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
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
  arrCategorias: ICategoria[] = []
  categoriasService = inject(CategoriasService)
  constructor() {
    this.miFormulario = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
        // Validators.email
      ]),
      categorias: new FormControl([], [this.categoriaValidador()])
    }, [])
  }

  async ngOnInit() {
    this.arrCategorias = await this.categoriasService.getAll()
  }

  getDataForm() {
    console.log(this.miFormulario.value);
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
    }
    if (this.miFormulario.valid) {
      this.miFormulario.reset()
    }
  }

  toggleCategoria(index: number) {
    const categoriasSeleccionadas: number[] = this.miFormulario.get('categorias')?.value || [];
    const categoriaId = this.arrCategorias[index].id;

    if (categoriasSeleccionadas.includes(categoriaId)) {
      // Si ya está seleccionado, lo quitamos
      const nuevoArray = categoriasSeleccionadas.filter(id => id !== categoriaId);
      this.miFormulario.get('categorias')?.setValue(nuevoArray);
    } else {
      // Si no está seleccionado, lo agregamos
      this.miFormulario.get('categorias')?.setValue([...categoriasSeleccionadas, categoriaId]);
      this.miFormulario.get('categorias')?.markAsTouched();
      this.miFormulario.get('categorias')?.updateValueAndValidity();
    }
  }

  categoriaValidador(): ValidatorFn{
    return (control) => {
      const categoriasSeleccionadas = control.value;
      return categoriasSeleccionadas && categoriasSeleccionadas.length > 0
        ? null
        : { sinCategoriaSeleccionada: true }; // Devuelve error si no hay categorías seleccionadas
    };
  }


  checkControl(formControlName: string, validator: string) {
    // return this.miFormulario.get(formControlName)?.touched;
    return this.miFormulario.get(formControlName)?.hasError(validator) && this.miFormulario.get(formControlName)?.touched;
  }
}
