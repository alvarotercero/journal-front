import { Component, inject, Input } from '@angular/core';
import { INoticia } from '../../interfaces/inoticia.interface';
import { NoticiasService } from '../../services/noticias.service';
import { AsideComponent } from '../../components/aside/aside.component';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-page-vista-noticia',
  standalone: true,
  imports: [AsideComponent],
  templateUrl: './page-vista-noticia.component.html',
  styleUrl: './page-vista-noticia.component.css'
})

export class PageVistaNoticiaComponent {

  @Input() miNoticia?: INoticia;
  @Input() noticiaSlug: string = '';

  noticiasService = inject(NoticiasService)

  sanitizer = inject(DomSanitizer)

  async ngOnChanges() {
    this.miNoticia = await this.noticiasService.getBySlug(this.noticiaSlug)

    // Con esto se puede usar en el html el inerHtml
    // Que viene en el texto de la base de datos
    this.miNoticia.texto = this.sanitizer.bypassSecurityTrustHtml(this.miNoticia.texto) as string;
  }
}
