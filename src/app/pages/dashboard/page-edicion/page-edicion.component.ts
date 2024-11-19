import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoticiasService } from '../../../services/noticias.service';

@Component({
  selector: 'app-page-edicion',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './page-edicion.component.html',
  styleUrl: './page-edicion.component.css'
})


export class PageEdicionComponent {
  contenidoForm: FormGroup;
  noticias: { titular: string; descripcion: string }[] = [];



  constructor(private noticiasService: NoticiasService) {
    this.contenidoForm = new FormGroup({
      id: new FormControl(null),
      titular: new FormControl(null),
      contenido: new FormControl('')

    });
  }

  // ngOnInit() {
  //   this.cargarNoticias();
  // }















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


  getDataForm() { }

}

// {
//   id: 11,
//     titular: "La inteligencia artificial llega al cine",
//       imagen: "https://example.com/images/ia-cine.jpg",
//         texto: "La inteligencia artificial está siendo utilizada para crear guiones y efectos especiales en la industria cinematográfica.",
//           secciones: "general",
//             fecha_publicacion: "2024-11-10",
//               redactor_id: "R011",
//                 editor_id: "E011",
//                   categoria_id: "C011",
//                     estado: "Publicado",
//                       importancia: "Media",
//                         cambios: new Date("2024-11-05"),
//                           slug: "ia-llega-al-cine"
// },