import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AluraDev';
  isSidenavOpened:boolean = true;


  onToggleSidenav() {
    this.isSidenavOpened = !this.isSidenavOpened;
    console.log(this.isSidenavOpened);
  }
}
