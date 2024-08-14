import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  isDrawerOpened = true;

  onToggleDrawer() {
    this.isDrawerOpened = !this.isDrawerOpened;
  }

  funciona() {
    console.log('Funciona');
  }
}
