import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstApp';
  log_email: String = "";
  log_password: String = "";
  reg_email: String = "";
  reg_password: String = "";
  reg_confirm_password: String = "";

  login(){}
  register(){}
}
