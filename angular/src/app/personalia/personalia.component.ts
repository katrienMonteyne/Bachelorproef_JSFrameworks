import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';


@Component({
  selector: 'app-personalia',
  templateUrl: './personalia.component.html',
  styleUrls: ['./personalia.component.css']
})



export class PersonaliaComponent implements OnInit {
  @Input() personalia: boolean;
  @Input() user: User;

  @Output() onEdited = new EventEmitter<boolean>();
  @Output() onNewUser = new EventEmitter<User>();
  
 

  constructor(private userService: UserService) { }

  ngOnInit() {


  }



  save() : void {


    this.userService.updateUser(this.user).subscribe(() =>{ console.log("UPDATED")
    });

    this

    this.personalia = true;

    this.onEdited.emit(true);
    this.onNewUser.emit(this.user);

  }

}
