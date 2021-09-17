import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toServices(){
    document.getElementById("services")?.scrollIntoView();
  }

  toContact(){
    document.getElementById("contact")?.scrollIntoView();
  }

  toLivraison(){
    document.getElementById("livraison")?.scrollIntoView();
  }
}
