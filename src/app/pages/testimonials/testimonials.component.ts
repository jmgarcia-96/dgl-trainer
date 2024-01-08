import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('DGLTrainer - Testimonios');
  }

  slides = [
    {
      img: 'assets/img/chefs/chefs-1.jpg',
      title: 'Welcome to Company',
      text: ' Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.',
      alt: 'Slide 1',
    },
    {
      img: 'assets/img/chefs/chefs-2.jpg',
      title: 'Lorem Ipsum Dolor',
      text: ' Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.',
      alt: 'Slide 2',
    },
    {
      img: 'assets/img/chefs/chefs-3.jpg',
      title: 'Sequi ea ut et est quaerat',
      text: ' Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.',
      alt: 'Slide 3',
    },
    {
      img: 'assets/img/chefs/chefs-1.jpg',
      title: 'Welcome to Company',
      text: ' Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.',
      alt: 'Slide 1',
    },
    {
      img: 'assets/img/chefs/chefs-2.jpg',
      title: 'Lorem Ipsum Dolor',
      text: ' Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.',
      alt: 'Slide 2',
    },
    {
      img: 'assets/img/chefs/chefs-3.jpg',
      title: 'Sequi ea ut et est quaerat',
      text: ' Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.',
      alt: 'Slide 3',
    },
  ];
  responsiveOptions: any[] = [];
}
