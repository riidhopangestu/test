import { Component, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'desainaturtoko';
  opened = true;
  showText = false;

  

  constructor(
    public dialog: MatDialog
    ) {}

  openDialog() {
    this.dialog.open(DialogComponent);
  }
}
