import { Component } from '@angular/core';
import { AuthGaurdService } from '../services/authGaurd.service';
@Component({
  selector: 'app-reciever',
  templateUrl: './reciever.component.html',
  styleUrls: ['./reciever.component.css'],
})
export class RecieverComponent {
  message: any;
  constructor(private recover: AuthGaurdService) {}
}
