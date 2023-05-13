import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title= 'Picture-Sorter-Application'; 
  today: Date;
   constructor() {
    this.today= new Date(); 
   }

  }