import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { INoticia } from '../../../interfaces/inoticia.interface';
import { ICategoria } from '../../../interfaces/icategoria.interface';
import { CategoriasService } from '../../../services/categorias.service';
import { NoticiasService } from '../../../services/noticias.service';
import { UsuariosService } from '../../../services/usuarios.service';
import { IUsuario } from '../../../interfaces/iusuario.interface';

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

  usuariosService = inject(UsuariosService)
  arrEditores: IUsuario[] = []

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
      jefeEditor: new FormControl(null, []),

      // ----------------------------
      // Recibir el id del usuario... ?
      // redactor_id: new FormControl(null, []),
      // editor_id: new FormControl(null, [])
      // ----------------------------

    });

    // Para generar el slug en tiempo real con el input del titular
    this.crearNoticiaForm.get('titular')?.valueChanges.subscribe(value => {
      const slug = this.generateSlug(value);
      this.crearNoticiaForm.patchValue({
        slug: slug
      });
    });

  }

  ngOnInit(): void {
    // Para obtener las categorias
    this.categoriasService.getAll().then((data: ICategoria[]) => {
      this.arrCategorias = data;
      console.log(this.arrCategorias);
    });

    // Para obtener los editores
    this.usuariosService.getEditores().then((data: IUsuario[]) => {
      this.arrEditores = data;
      console.log(this.arrEditores);
    });

  }

  // Función para enviar el formulario (Por terminar)
  async onSubmit() {
    console.table(this.crearNoticiaForm.value);
  }

  // Función para generar el slug
  generateSlug(text: string): string {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-');
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