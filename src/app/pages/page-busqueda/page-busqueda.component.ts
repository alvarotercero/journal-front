import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-busqueda',
  standalone: true,
  imports: [],
  templateUrl: './page-busqueda.component.html',
  styleUrl: './page-busqueda.component.css'
})
export class PageBusquedaComponent {
  query?: string;

  activatedRoute = inject(ActivatedRoute)
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      this.query = params.q
    })
  }
}
