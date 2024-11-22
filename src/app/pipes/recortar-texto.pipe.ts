import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recortarTexto',
  standalone: true
})
export class RecortarTextoPipe implements PipeTransform {

  transform(value: string | undefined, limit: number = 100): string {

    if (!value) {
      return ''
    }
    const textoRecortado = `${value.slice(0, limit)}...`
    return textoRecortado;
  }

}
