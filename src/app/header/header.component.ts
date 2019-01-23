import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  this.loadScript('./../../assets/js/jquery.min.js');
   this.loadScript('./../../assets/js/modernizr.js');
   this.loadScript('./../../assets/js/script.js');
   this.loadScript('./../../assets/js/bootstrap.min.js');
   this.loadScript('./../../assets/js/wow.min.js');
   this.loadScript('./../../assets/js/slick.min.js');
   this.loadScript('./../../assets/js/parallax.js');
   this.loadScript('./../../assets/js/select-chosen.js');	
  }
   public loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

}
export class headerComponent { }
