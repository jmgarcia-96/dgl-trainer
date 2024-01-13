import {
  Component,
  HostListener,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { GeneralService } from '../../services/general.service';
import { OverlayPanel } from 'primeng/overlaypanel';
import { Menu } from 'primeng/menu';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() active: string = '';
  // @ViewChild('menu') menu: OverlayPanel | undefined;
  @ViewChild('menu') menu: Menu | undefined;
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
    // const element = this.menu?.el?.nativeElement?.querySelector('.p-menu');
    // if (!this.isOpened) {
    //   element.style.position = 'absolute'; // Cambiar según tus necesidades
    //   this.menu?.hide();
    // } else {
    //   element.style.position = 'fixed'; // Cambiar según tus necesidades
    // }
  }

  activeMenu() {
    this.isOpened = false;
    this.menu?.hide();
  }
}
