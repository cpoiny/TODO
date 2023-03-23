import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
url : any;

constructor (
  private location : Location
) {}

ngOnInit(){
  //afin de détecter la page active grace a la methode location
  this.location.onUrlChange((urlActive) => this.url = urlActive);

}

}