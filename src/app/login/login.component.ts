import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  users = {
    user: '',
    password: '',
  };

  constructor(private router : Router) {}

  ngOnInit() {}

  onLogin() {
    console.log('user........', this.users.user);
    console.log('password.......', this.users.password);
    if (this.users.user === 'user' && this.users.password === 'user') {
      this.router.navigate(['/user']);
    } else if (this.users.user === 'admin' && this.users.password === 'admin') {
      this.router.navigate(['/admin']);
    } else {
      alert('Please Enter Vaild Password!');
      this.users.user = '';
      this.users.password = '';
      return;
    }
  }
}
