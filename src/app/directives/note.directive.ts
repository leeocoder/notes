import { Directive, ElementRef, Renderer2 } from "@angular/core";

@Directive({
  selector: '[uiNote]',
  standalone: true
})
export class NoteDirective {
  private readonly style = 'bg-slate-700 rounded-md p-5 overflow-hidden relative';
  private readonly styleEffect = 'absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/5';
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.style.split(' ').forEach(style => {
      this.renderer.addClass(this.el.nativeElement, style);
    });
    const element = this.renderer.createElement('div');
    this.styleEffect.split(' ').forEach(style => {
      this.renderer.addClass(element, style);
    });
    this.renderer.appendChild(this.el.nativeElement, element);

  }
}
