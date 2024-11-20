import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { INoticia } from '../../../interfaces/inoticia.interface';
import { ICategoria } from '../../../interfaces/icategoria.interface';
import { CategoriasService } from '../../../services/categorias.service';
import { NoticiasService } from '../../../services/noticias.service';

@Component({
  selector: 'app-page-creacion',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './page-creacion.component.html',
  styleUrl: './page-creacion.component.css'
})

export class PageCreacionComponent {

  arrCategorias: ICategoria[] = []
  crearNoticiaForm: FormGroup
  noticia!: INoticia
  categoriasService = inject(CategoriasService)
  noticiasService = inject(NoticiasService)

  constructor() {
    this.crearNoticiaForm = new FormGroup({
      titular: new FormControl('', []),
      texto: new FormControl('', []),
      importancia: new FormControl(null, []),
      categoria: new FormControl(null, []),
      urlImagen: new FormControl(null, []),
      slug: new FormControl(null, []),
      estado: new FormControl(null, []),
      seccion: new FormControl(null, []),
      fechaPublicacion: new FormControl(null, []),
      jefeEditor: new FormControl(null, []),

      // ----------------------------
      // Recibir el id del usuario... ?
      // redactor_id: new FormControl(null, []),
      // editor_id: new FormControl(null, [])
      // ----------------------------

    });
  }

  ngOnInit(): void {
    this.categoriasService.getAll().then((data: ICategoria[]) => {
      this.arrCategorias = data;
    });
  }

  async onSubmit() {
    console.table(this.crearNoticiaForm.value);
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