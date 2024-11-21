import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';
import { IUsuario } from '../../interfaces/iusuario.interface';
import { UpperCasePipe } from '@angular/common';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, UpperCasePipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent {

  usuariosService = inject(UsuariosService)

  usuarioLogueado!: IUsuario

  token: string | null = ''

  async ngDoCheck() {
    this.token = localStorage.getItem('token');
    if (this.token) {
      this.usuarioLogueado = await this.usuariosService.getUsuarioPorId();
    }
  }
}

