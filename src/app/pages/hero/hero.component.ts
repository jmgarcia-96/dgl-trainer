import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  providers: [],
})
export class HeroComponent {
  keys: any[] = [
    {
      title: 'Determinación',
      img: 'img/icon-1.png',
      description:
        'Creer y confiar en sí mismo es el primer paso para lograr tus objetivos.',
      color: '',
      number: '01',
    },
    {
      title: 'Disciplina',
      img: 'img/icon-1.png',
      description: 'Teniendo constancia día tras día, los resultados llegarán.',
      color: 'color-1',
      number: '02',
    },
    {
      title: 'Dieta',
      img: 'img/icon-1.png',
      description:
        'La dieta personalizada y su estricto cumplimiento es uno de los pilares para conseguir el físico deseado.',
      color: 'color-2',
      number: '03',
    },
    {
      title: 'Entrenamiento',
      img: 'img/icon-1.png',
      description:
        'Realiza cada entrenamiento con alta intensidad y siempre enfocado en cada repetición/serie.',
      color: 'color-3',
      number: '04',
    },
  ];

  constructor(private titleService: Title) {
    this.titleService.setTitle('DGLTrainer - Inicio');
  }

  ngOnInit() {}
}
