// src/app/pages/dashboard/page-edicion/page-edicion.component.ts
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NoticiasService } from '../../../services/noticias.service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-page-edicion',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './page-edicion.component.html',
  styleUrls: ['./page-edicion.component.css']
})
export class PageEdicionComponent {
  contenidoForm: FormGroup;
  noticiasService = inject(NoticiasService);
  router = inject(ActivatedRoute);

  constructor() {
    this.contenidoForm = new FormGroup({
      id: new FormControl(null),
      titular: new FormControl(''),
      contenido: new FormControl('')
    });
  }

  ngOnInit() {
    this.router.params.subscribe(async params => {
      const id = params['noticiaId'];
      try {
        const noticia = await this.noticiasService.getById(id);
        this.contenidoForm.setValue({
          id: noticia.id,
          titular: noticia.titular,
          contenido: noticia.texto
        });
      } catch (error) {
        console.error('Error al obtener la noticia:', error);
      }
    });
  }

  onEditar() {
    console.log('Botón Editar');
    console.log('Contenido actual:', this.contenidoForm);
  }

  onGuardar() {
    console.log('Botón Guardar');
    console.log('Guardando contenido:', this.contenidoForm);
  }

  onBorrar() {
    console.log('Botón Borrar');
    // this.contenidoForm = '';
    console.log('Contenido borrado');
  }

  onSeleccionarEditor() {
    console.log('Botón Seleccionar Editor');
  }

  onPublicar() {
    console.log('Botón Publicar');
    // if (this.contenidoForm.length > 0) {
    console.log('El contenido ha sido publicado:', this.contenidoForm);
    // } else {
    console.log('No hay contenido para publicar');
    // }
  }

  onVerEstado() {
    console.log('Botón Estado');
    // const estado = this.contenidoForm.length > 0 ? 'Hay contenido escrito' : 'El contenido está vacío';
    console.log('Estado del contenido:');
  }

}