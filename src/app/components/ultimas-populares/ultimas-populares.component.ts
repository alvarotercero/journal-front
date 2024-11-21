import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { INoticia } from '../../interfaces/inoticia.interface';
import { NoticiasService } from '../../services/noticias.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ultimas-populares',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './ultimas-populares.component.html',
  styleUrl: './ultimas-populares.component.css'
})
export class UltimasPopularesComponent {
  selectedOption: string = 'ultimas'

  arrUltimasNoticias: INoticia[] = [];
  arrNoticiasPopulares: INoticia[] = []
  noticiasService = inject(NoticiasService)

  async ngOnInit() {
    this.arrUltimasNoticias = await this.noticiasService.getUltimasNoticias(5);
    this.arrNoticiasPopulares = (await this.noticiasService.getAll('destacado', undefined, 5))
  }
}
