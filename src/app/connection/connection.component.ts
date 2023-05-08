import { Component } from '@angular/core';
import { AuthGaurdService } from '../services/authGaurd.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css'],
})
export class ConnectionComponent {
  status: boolean = false;
  currentUrl = this.router.url;
  constructor(private loginService: AuthGaurdService, private router: Router) {}
  async connect() {
    this.status = await this.loginService.login();
    console.log(this.status);
    if (this.status) {
      this.router.navigate(['home']);
    } else {
      this.router.navigate(['']);
    }
  }
}
