import { Component, ElementRef, Input, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() img: string = '';

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit() {
    // const containerElement = this.el.nativeElement.querySelector(
    //   '.breadcrumb-section'
    // );
    // this.renderer.setStyle(
    //   containerElement,
    //   'background-image',
    //   `url(${this.img})`
    // );
  }
}
