import { suscriptoresService } from '../../services/suscriptores.service';
import { Component, inject, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-page-bajaSuscripcion',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './page-bajaSuscripcion.component.html',
  styleUrl: './page-bajaSuscripcion.component.css'
})
export class PageBajaSuscripcionComponent {
  @Input() token: string = "";
  @Input() email: string = "";

  bajaSuscripcionForm: FormGroup;
  suscriptoresService = inject(suscriptoresService)
  router = inject(Router)

  constructor() {
    this.bajaSuscripcionForm = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
      ]),
    }, [])
  }

  async ngOnInit() {
    //TODO controlar que se ha escrito algo y que sea un mail en el formulario antes de hacer nada

    //si no ha llegado token es porque han entrado directamente, entonces el formulario se visualiza
    //Si llega token entonces el formulario no se ve y se ve el mensaje de baja, se entrará en el siguiente if
    if (this.token != undefined) {
      try {//esto sí lo elimina
        let response: any = await this.suscriptoresService.deleteSuscriptor(this.email, this.token)
      } catch (error: any) {
        console.log(error.error.message);
      }
    }
  }
  // ngOnChanges() {
  // }

  async getDataBajaSuscripcion() {
    const email = this.bajaSuscripcionForm.value.email;
    try {//no se elimina, se le envía un correo desde donde se le volverá a enviar a esta página para eliminarlo definitivamente
      let respuesta: any = await this.suscriptoresService.solicitarBajaSuscriptor(email);
      this.bajaSuscripcionForm.reset();

      //en función de si el email existe en la base de datos o no el mensaje será diferente
      const mensaje = (respuesta.mailEnviado) ?
        `Recibirás un email en ${email} con el enlace para confirmar la baja de suscripción a nuestro periódico.`
        : `El suscriptor con email ${email} no existe en nuestra base de datos.`;

      Swal.fire({
        icon: (respuesta.mailEnviado) ? "success" : "warning",
        title: respuesta.mensaje,
        text: mensaje,
        footer: ''
      });

    } catch (error: any) {
      console.log(error.error.message);
    }
  }
}