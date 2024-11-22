import { suscriptoresService } from './../../services/suscriptores.service';
import { ActivatedRoute } from '@angular/router';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-page-activar',
  standalone: true,
  imports: [],
  templateUrl: './page-activar.component.html',
  styleUrl: './page-activar.component.css'
})
export class PageActivarComponent {
  activatedRoute = inject(ActivatedRoute)
  suscriptoresService = inject(suscriptoresService)
  id: number = 0;
  token: string = "";
  activo: number = 0;
  estado: string = "";
  respActivo: boolean = false;

  ngOnInit() {
    this.activatedRoute.params.subscribe(async (params: any) => {
      this.token = params.token;
      this.activo = params.activo;
      this.id = params.id;
      const respuesta = await this.suscriptoresService.getActivarSuscriptor(this.id, this.activo, this.token);
      this.estado = respuesta.mensaje;
      console.log(respuesta);

      this.respActivo = respuesta.activo;
    });
  }
}