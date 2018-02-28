import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {UserService} from '../user.service';

@Component({
  selector: 'app-profiel',
  templateUrl: './profiel.component.html',
  styleUrls: ['./profiel.component.css']
})
export class ProfielComponent implements OnInit {

  user : User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() : void {
    this.userService.getUser(1).subscribe(user => this.user = user);
  }

  editPersonalia() : void {
    console.log("KLIK");
  }


}
