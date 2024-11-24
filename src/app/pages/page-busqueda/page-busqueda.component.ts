import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsideComponent } from "../../components/aside/aside.component";
import { NoticiasService } from '../../services/noticias.service';
import { INoticia } from '../../interfaces/inoticia.interface';
import { NoticiaCardComponent } from "../../components/noticia-card/noticia-card.component";

@Component({
  selector: 'app-page-busqueda',
  standalone: true,
  imports: [AsideComponent, NoticiaCardComponent],
  templateUrl: './page-busqueda.component.html',
  styleUrl: './page-busqueda.component.css'
})
export class PageBusquedaComponent {
  query: string = '';
  activatedRoute = inject(ActivatedRoute)
  noticiasService = inject(NoticiasService)
  arrNoticiasBuscadas: INoticia[] = [];

  ngOnInit() {

    this.activatedRoute.queryParams.subscribe(async (params: any) => {
      this.query = params.q
      let parsedQuery: string = this.query.replace(' ', '&')
      try {
        this.arrNoticiasBuscadas = await this.noticiasService.getByName(parsedQuery, 30)
        console.log(await this.noticiasService.getByName(parsedQuery, 30));

      } catch (error) {
        console.log(error);
        this.arrNoticiasBuscadas = []
      }

    })
  }
}

