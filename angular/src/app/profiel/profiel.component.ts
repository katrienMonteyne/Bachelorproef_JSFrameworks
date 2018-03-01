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
  language: boolean = true;

  constructor(private userService: UserService) {
   }

  ngOnInit() {
   this.getUser();
  }

  getUser() : void {

    this.userService.getUser(1).subscribe(res => this.user = res);

    // const x = this.userService.getUser(1);
    // x.subscribe(data => console.log(JSON.stringify(data)));

    // this.userService.getUser(1).subscribe(data => this.user = {
      // id: data['id'],
      // firstname:  data['firstname'],
      // lastname:  data['lastname'],
      // age:  data['age'],
    //   address:  data['address'],
    //   sex:  data['sex'],
    //   email:  data['email'],
    //   languages:  data['languages']
    // }); 
    //this.http.get('http://localhost:3000/users/1').subscribe(res => console.log("res.toString()"));
  }

  editPersonalia() : void {

    this.personalia = !this.personalia;
  }

  editLanguage() : void {
    
    this.language = !this.language;
  }

  onPerEdited(edited : boolean) : void {
    this.personalia = edited;
    console.log(this.user)
  }

  onLangEdited(edited : boolean) :void {
    this.language = edited;
    console.log(this.user)
  }

}
// 