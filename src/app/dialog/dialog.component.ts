import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['../app.component.scss']
})
export class DialogComponent implements OnInit {
  isLoggedIn = false;
  constructor(
    private tokenStorageService: TokenStorageService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.isLoggedIn = this.tokenStorageService.isLoggedIn();
  }
  logout(): void {
    this.tokenStorageService.signOut();
    
    this.tokenStorageService.isLoggedIn();
    console.log('useeer',this.tokenStorageService.isLoggedIn())
    this.router.navigate(['login']);
  }

}
