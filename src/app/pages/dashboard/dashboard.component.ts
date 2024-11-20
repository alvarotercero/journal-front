import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NoticiasService } from '../../services/noticias.service';
import { INoticia } from '../../interfaces/inoticia.interface';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent {

  noticiasService = inject(NoticiasService)
  arrNoticias: INoticia[] = []


  async ngOnInit() {
    this.arrNoticias = await this.noticiasService.getByUser()
  }




}

