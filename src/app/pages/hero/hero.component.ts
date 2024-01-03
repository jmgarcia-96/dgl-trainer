import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  providers: [],
})
export class HeroComponent {
  images: any[] = [];

  get activeIndex(): number {
    return this._activeIndex;
  }

  set activeIndex(newValue) {
    if (this.images && 0 <= newValue && newValue <= this.images.length - 1) {
      this._activeIndex = newValue;
    }
  }

  _activeIndex: number = 2;

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];

  constructor(private titleService: Title) {
    this.titleService.setTitle('DGLTrainer - Inicio');
  }

  ngOnInit() {
    this.images = [
      'src/assets/img/hero-2.jpg',
      'src/assets/img/hero-2.jpg',
      'src/assets/img/hero-2.jpg',
    ];
  }

  next() {
    this.activeIndex++;
  }

  prev() {
    this.activeIndex--;
  }
}
