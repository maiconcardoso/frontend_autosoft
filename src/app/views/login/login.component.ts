import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = {
    username: '',
    password: '',
  };

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  login(){
    console.log(this.user);
    this.authService.doLogin(this.user.username, this.user.password).subscribe(data => {
      console.log(data);
    })
  }

}
