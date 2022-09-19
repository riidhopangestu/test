import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
@Component({
  selector: 'app-setting-marketplace',
  templateUrl: './setting-marketplace.component.html',
  styleUrls: ['../app.component.scss', './setting-marketplace.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SettingMarketplaceComponent implements OnInit {

  FabOptions = {
    buttons: [
      {
        icon: 'timeline'
      },
      {
        icon: 'view_headline'
      },
      {
        icon: 'room'
      },
      {
        icon: 'lightbulb_outline'
      },
      {
        icon: 'lock'
      }
    ]
  };

  public currentWindowWidth: number;
  constructor(
    private domSanitizer: DomSanitizer,
    private matIconRegistry: MatIconRegistry
    ) {
    this.matIconRegistry.addSvgIcon("ico-btk",this.domSanitizer
    .bypassSecurityTrustResourceUrl ('assets/img/ec-logo/ico-btk.svg')); 
    this.matIconRegistry.addSvgIcon("add", "assets/img/icon/add.svg");

    this.currentWindowWidth = window.innerWidth;
   }

  ngOnInit(): void {
  }
  

}
