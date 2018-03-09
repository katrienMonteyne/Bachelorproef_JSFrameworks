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
    this.userService.getUser(1).subscribe(res => {this.user = res; console.log(res)});
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
