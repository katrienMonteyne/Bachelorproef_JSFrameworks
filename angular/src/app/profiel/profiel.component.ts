import { Component, OnInit, SimpleChanges } from '@angular/core';
import {User} from '../user';
import {UserService} from '../user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profiel',
  templateUrl: './profiel.component.html',
  styleUrls: ['./profiel.component.css']
})
export class ProfielComponent implements OnInit {

  user : User;
  personalia : boolean = true;

  constructor(private userService: UserService) {
   }

  ngOnInit() {
   this.getUser();
  }

  getUser() : void {

    this.userService.getUser(1).subscribe(res => this.user = res);
    //this.http.get('http://localhost:3000/users/1').subscribe(res => console.log("res.toString()"));
  }

  editPersonalia() : void {
    console.log("KLIK");
    
    this.personalia = !this.personalia;
  }

  onEdited(edited : boolean) : void {
    this.personalia = edited;
  }

  onNewUser(editedUser : User) :void {
   
  }

}
