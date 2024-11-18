import { Component, inject } from '@angular/core';
import { INoticia } from '../../../interfaces/inoticia.interface';
import { NoticiaEditionCardComponent } from "../../../components/noticia-edition-card/noticia-edition-card.component";
import { NoticiasService } from '../../../services/noticias.service';

@Component({
  selector: 'app-noticias-dashboard',
  standalone: true,
  imports: [NoticiaEditionCardComponent],
  templateUrl: './page-noticias-dashboard.component.html',
  styleUrl: './page-noticias-dashboard.component.css'
})
export class PageNoticiasDashboardComponent {
  arrNoticiasSinPublicar: INoticia[] = [];
  noticiasService = inject(NoticiasService)
  async ngOnInit() {
    this.arrNoticiasSinPublicar = await this.noticiasService.getByUser(1)
  }
}
