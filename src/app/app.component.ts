import { Component, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { TokenStorageService } from './_services/token-storage.service';
import { Subscription } from 'rxjs';
import { AuthService } from './_services/auth.service';
import { EventBusService } from './_shared/event-bus.service';
import { Router } from '@angular/router';
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

  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;


  eventBusSub?: Subscription;

  constructor(
    public dialog: MatDialog,
    private tokenStorageService: TokenStorageService,
    private authService: AuthService,
    private eventBusService: EventBusService,
    private router: Router
    ) {}

    ngOnInit(): void {
      this.isLoggedIn = this.tokenStorageService.isLoggedIn();
  
      if (this.isLoggedIn) {
        const user = this.tokenStorageService.getUser();
        this.roles = user.roles;

        console.log(user)
  
        this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
        this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
  
        this.username = user.username;
      }
  
      this.eventBusSub = this.eventBusService.on('logout', () => {
        this.logout();
      });
    }
  
    logout(): void {
      this.tokenStorageService.signOut();
      
      this.router.navigate(['login']);
    }

  openDialog() {
    this.dialog.open(DialogComponent);
  }

}
