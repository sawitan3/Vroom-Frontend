import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {StorageService} from '../../services/storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isNavbarCollapsed = true;
  isLoggedIn: boolean;
  constructor(private router: Router,
              private storage: StorageService) { }

  ngOnInit() {
    this.isLoggedIn = this.storage.getItem('isLoggedIn') || false;
    this.storage.watchStorage().subscribe(() => {
      this.isLoggedIn = this.storage.getItem('isLoggedIn') || false;
    });
  }

  linkClick(destination: string) {
    this.router.navigateByUrl(destination);
    this.isNavbarCollapsed = true;
  }

  logout() {
    this.storage.clear();
    this.router.navigate(['/main-page']);
  }
}
