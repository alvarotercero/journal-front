import { Component, inject } from '@angular/core';
import { INoticia } from '../../../interfaces/inoticia.interface';
import { NoticiaEditionCardComponent } from "../../../components/noticia-edition-card/noticia-edition-card.component";
import { NoticiasService } from '../../../services/noticias.service';
import { RouterLink } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-noticias-dashboard',
  standalone: true,
  imports: [NoticiaEditionCardComponent, RouterLink],
  templateUrl: './page-noticias-dashboard.component.html',
  styleUrl: './page-noticias-dashboard.component.css'
})

export class PageNoticiasDashboardComponent {

  arrNoticiasSinPublicar: INoticia[] = [];
  noticiasService = inject(NoticiasService)
  sanitizer = inject(DomSanitizer)
  async ngOnInit() {
    this.arrNoticiasSinPublicar = await this.noticiasService.getByUser()
  }

}
