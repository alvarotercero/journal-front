import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ultimas-populares',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ultimas-populares.component.html',
  styleUrl: './ultimas-populares.component.css'
})
export class UltimasPopularesComponent {
  selectedOption: string = 'ultimas'
}
