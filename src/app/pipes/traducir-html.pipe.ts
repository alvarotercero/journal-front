import { inject, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'traducirHtml',
  standalone: true
})
export class TraducirHtmlPipe implements PipeTransform {
  private sanitizer = inject(DomSanitizer)

  transform(html: string | undefined): SafeHtml {
    if (!html) {
      return ''
    }
    const styledHtml = html.replace(
      '<p>',
      '<p class="contenido-noticia">'
    );
    return this.sanitizer.bypassSecurityTrustHtml(styledHtml);
  }

}
