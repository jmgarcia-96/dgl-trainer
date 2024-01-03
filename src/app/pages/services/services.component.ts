import { Component, OnInit } from '@angular/core';
import { ServicesConstants } from './services.constants';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  providers: [ServicesConstants],
})
export class ServicesComponent implements OnInit {
  services: any[] = [];

  constructor(
    private servicesConstants: ServicesConstants,
    private titleService: Title
  ) {
    this.titleService.setTitle('DGLTrainer - Servicios');
    this.services = this.servicesConstants.services;
  }

  ngOnInit(): void {}
}
