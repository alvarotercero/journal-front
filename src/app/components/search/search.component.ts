import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  miBusqueda: FormGroup;

  constructor() {
    this.miBusqueda = new FormGroup({
      texto: new FormControl(null, [])

    }, [])
  }
}
