
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
      contenido: new FormControl(''),
      importancia: new FormControl(''),
      slug: new FormControl(''),
      estado: new FormControl(''),
      fecha_publicacion: new FormControl(''),
      secciones: new FormControl(''),
      urlImagen: new FormControl('')
    });

    this.contenidoForm.get('titular')?.valueChanges.subscribe(value => {
      const slug = this.generateSlug(value);
      this.contenidoForm.patchValue({
        slug: slug
      });
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
          contenido: noticia.texto,
          importancia: noticia.importancia,
          slug: noticia.slug,
          estado: noticia.estado,
          fecha_publicacion: noticia.fecha_publicacion,
          secciones: noticia.secciones,
          urlImagen: noticia.imagen
        });
      } catch (error) {
        console.error('Error al obtener la noticia:', error);
      }
    });
  }

  generateSlug(text: string): string {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-');
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
}
