import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NoticiasService } from '../../../services/noticias.service';

@Component({
  selector: 'app-page-creacion',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './page-creacion.component.html',
  styleUrl: './page-creacion.component.css'
})

export class PageCreacionComponent {

  crearNoticiaForm: FormGroup


  constructor(private noticiasService: NoticiasService) {
    this.crearNoticiaForm = new FormGroup({
      titular: new FormControl(null, []),
      contenido: new FormControl(null, []),
      importancia: new FormControl(null, []),
      categoria: new FormControl(null, []),
      urlImagen: new FormControl(null, []),
      slug: new FormControl(null, []),
      estado: new FormControl(null, []),
      fechaPublicacion: new FormControl(null, []),
      jefeEditor: new FormControl(null, []),
    })

  }
}


/*

### Crear una noticia
POST {{host}}/api/noticias
Content-Type: application/json
Authorization: {{tokenRedactor}}

Body: {
  titular: string,
  imagen: string,
  texto: string,
  secciones: "principal" | "secundario" | "destacado",
  fecha_publicacion: Date,
  redactor_id: number,
  editor_id: number,
  categoria_id: number,
  estado: "revision" | "publicado" | "borrador",
  importancia: number,
  cambios?: string,
  slug: string
}

*/