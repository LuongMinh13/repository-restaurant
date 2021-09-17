import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chezhamy';

  toHome(){
    document.getElementById("home")?.scrollIntoView();
  }

  toMenu(){
    document.getElementById("menu")?.scrollIntoView();
  }

  toLivraison(){
    document.getElementById("livraison")?.scrollIntoView();
  }

  toContact(){
    document.getElementById("contact")?.scrollIntoView();
  }
}

