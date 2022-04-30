import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'new-frontend-autosoft';
  showMenu: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
      this.authService.showMenuEmitter.subscribe(
        response => {this.showMenu = response}
      );
  }
}
