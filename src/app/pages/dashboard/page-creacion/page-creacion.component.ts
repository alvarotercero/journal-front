import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { INoticia } from '../../../interfaces/inoticia.interface';
import { ICategoria } from '../../../interfaces/icategoria.interface';
import { CategoriasService } from '../../../services/categorias.service';
import { NoticiasService } from '../../../services/noticias.service';
import { UsuariosService } from '../../../services/usuarios.service';
import { IUsuario } from '../../../interfaces/iusuario.interface';
import { Validators } from '@angular/forms';

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

  usuarioId!: IUsuario
  rolUsuario!: string

  usuariosService = inject(UsuariosService)
  arrEditores: IUsuario[] = []

  constructor() {
    this.crearNoticiaForm = new FormGroup({
      titular: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ]),
      texto: new FormControl('', [
        Validators.required,
        Validators.maxLength(4294967295)
      ]),
      importancia: new FormControl(null, [
        Validators.required
      ]),
      categoria_id: new FormControl("", [
        Validators.required
      ]),
      imagen: new FormControl(null, [
        Validators.required
      ]),
      slug: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
      ]),
      estado: new FormControl('borrador', [
        Validators.required
      ]),
      secciones: new FormControl(null, [
        Validators.required
      ]),
      editor_id: new FormControl("", [
        Validators.required
      ]),
      fecha_publicacion: new FormControl(new Date().toISOString().split('T')[0], [
        Validators.required
      ]),
      redactor_id: new FormControl("", []),
      cambios: new FormControl(null, [])
    });

    // Para generar el slug en tiempo real con el input del titular
    this.crearNoticiaForm.get('titular')?.valueChanges.subscribe(value => {
      const slug = this.generarSlug(value);
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

    // Para obtener el id del usuario // COMO OBTENGO EL ID.....
    this.usuariosService.getUsuarioPorId().then((data: IUsuario) => {
      this.usuarioId = data;
      console.log(this.usuarioId);
      this.crearNoticiaForm.patchValue({
        redactor_id: this.usuarioId.id
      });
      this.rolUsuario = this.usuarioId.rol;
    });
  }

  // Función para enviar el formulario
  async onSubmit() {
    console.table(this.crearNoticiaForm.value);
    this.noticiasService.insertNoticia(this.crearNoticiaForm.value).then((data: INoticia[]) => {
      console.table(data);
    });
  }

  // Función para generar el slug
  generarSlug(text: string): string {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-');
  }

}