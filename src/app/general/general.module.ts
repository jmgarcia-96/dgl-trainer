import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { OverlayPanelModule } from 'primeng/overlaypanel';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule, MenuModule, ButtonModule, OverlayPanelModule],
  exports: [HeaderComponent, FooterComponent],
})
export class GeneralModule {}
