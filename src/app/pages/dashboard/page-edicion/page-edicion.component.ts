
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NoticiasService } from '../../../services/noticias.service';
import { UsuariosService } from '../../../services/usuarios.service';
import { CategoriasService } from '../../../services/categorias.service';
import { inject } from '@angular/core';
import { ICategoria } from '../../../interfaces/icategoria.interface';
import { IUsuario } from '../../../interfaces/iusuario.interface';
import { INoticia } from '../../../interfaces/inoticia.interface';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-page-edicion',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './page-edicion.component.html',
  styleUrls: ['./page-edicion.component.css']
})
export class PageEdicionComponent {

  categoriasService = inject(CategoriasService);
  usuariosService = inject(UsuariosService);
  noticiasService = inject(NoticiasService);

  editarNoticiaForm: FormGroup;
  router = inject(ActivatedRoute);

  arrCategorias: ICategoria[] = [];
  arrEditores: IUsuario[] = [];

  usuarioId!: IUsuario;
  noticia!: INoticia;
  noticiaId!: number;
  //  Defino noticiaId aqui para poder usarlo en la función obtenerNoticia y en la función de editar la noticia

  constructor() {
    this.editarNoticiaForm = new FormGroup({
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
    });

    this.editarNoticiaForm.get('titular')?.valueChanges.subscribe(value => {
      const slug = this.generateSlug(value);
      this.editarNoticiaForm.patchValue({
        slug: slug
      });
    });
  }

  ngOnInit() {

    this.obtenerNoticia();

    // Para obtener las categorias
    this.categoriasService.getAll().then((data: ICategoria[]) => {
      this.arrCategorias = data;
    });

    // Para obtener los editores
    this.usuariosService.getEditores().then((data: IUsuario[]) => {
      this.arrEditores = data;
      console.log(this.arrEditores);
    });

    // Para obtener el id del usuario
    this.usuariosService.getUsuarioPorId().then((data: IUsuario) => {
      this.usuarioId = data;
      console.log(this.usuarioId);
      this.editarNoticiaForm.patchValue({
        redactor_id: this.usuarioId.id
      });
    });
  }

  obtenerNoticia() {
    this.router.params.subscribe(async params => {
      this.noticiaId = params['noticiaId'];
      try {
        const noticia = await this.noticiasService.getById(this.noticiaId);
        this.editarNoticiaForm.setValue({
          titular: noticia.titular,
          texto: noticia.texto,
          importancia: noticia.importancia,
          slug: noticia.slug,
          estado: noticia.estado,
          fecha_publicacion: noticia.fecha_publicacion,
          secciones: noticia.secciones,
          imagen: noticia.imagen,
          editor_id: noticia.editor_id,
          categoria_id: noticia.categoria_id,
          redactor_id: noticia.redactor_id
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

  onSubmit() {
    this.noticiasService.updateNoticia(this.editarNoticiaForm.value, this.noticiaId).then((data: INoticia) => {
      console.table(data);
    });
  }
}
