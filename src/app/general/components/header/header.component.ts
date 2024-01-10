import {
  Component,
  HostListener,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { GeneralService } from '../../services/general.service';
import { OverlayPanel } from 'primeng/overlaypanel';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() active: string = '';
  @ViewChild('menu') menu: OverlayPanel | undefined;
  isOpened: boolean = false;

  isNavbarScrolled = false;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY;

    // Cambia el valor según sea necesario, por ejemplo, 100px.
    this.isNavbarScrolled = scrollY > 95;
  }

  constructor(public generalService: GeneralService) {}

  ngOnInit() {}

  toggleMenu() {
    this.isOpened = !this.isOpened;
  }

  activeMenu() {
    this.isOpened = false;
    this.menu?.hide();
  }
}
