import { Component, OnInit } from '@angular/core';
import { FaqConstants } from './faq.constants';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent implements OnInit {
  faq: any[] = [];
  activeElement: any = null;

  constructor(private faqConstants: FaqConstants, private titleService: Title) {
    this.titleService.setTitle('DGLTrainer - Preguntas frecuentes');
    this.faq = this.faqConstants.faq;
  }

  ngOnInit(): void {}
}
