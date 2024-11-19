import { Component, inject, Input } from '@angular/core';
import { DestacadosComponent } from "../../components/destacados/destacados.component";
import { NoticiasGeneralesComponent } from "../../components/noticias-generales/noticias-generales.component";
import { NoticiasSecundariasComponent } from "../../components/noticias-secundarias/noticias-secundarias.component";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-home',
  standalone: true,
  imports: [DestacadosComponent, NoticiasGeneralesComponent, NoticiasSecundariasComponent],
  templateUrl: './page-home.component.html',
  styleUrl: './page-home.component.css'
})
export class PageHomeComponent {
  categoria: string = '';
  activatedRoute = inject(ActivatedRoute)
  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      // console.log(params);
      this.categoria = params.categoria
      console.log(this.categoria);

    })
  }
}
