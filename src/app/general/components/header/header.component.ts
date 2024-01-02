import { Component, Input, OnInit } from '@angular/core';
import { GeneralService } from '../../services/general.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() active: string = '';
  isOpened: boolean = false;

  constructor(public generalService: GeneralService) {}

  ngOnInit() {}

  toggleMenu() {
    this.isOpened = !this.isOpened;
    console.log(this.isOpened ? 'ABIERTO' : 'CERRADO');
  }

  activeMenu(event: any) {
    console.log(this.active);
    this.isOpened = false;
    let node;
    if (event.target.classList.contains('p-submenu-header') == true) {
      node = 'submenu';
    } else if (event.target.tagName === 'SPAN') {
      node = event.target.parentNode.parentNode;
    } else {
      node = event.target.parentNode;
    }
    if (node != 'submenu') {
      let menuitem = document.getElementsByClassName('p-menuitem');
      for (let i = 0; i < menuitem.length; i++) {
        menuitem[i].classList.remove('active');
      }
      node.classList.add('active');
    }
  }
}
