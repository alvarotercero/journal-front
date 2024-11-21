import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  miBusqueda: FormGroup;
  router = inject(Router)
  constructor() {
    this.miBusqueda = new FormGroup({
      texto: new FormControl(null, [Validators.required])
    }, [])
  }

  buscar() {
    this.router.navigate(['/busqueda'], { queryParams: { q: this.miBusqueda.get('texto')?.value } })
  }
}
