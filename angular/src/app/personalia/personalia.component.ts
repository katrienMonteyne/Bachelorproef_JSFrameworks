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

  @Output() onPerEdited = new EventEmitter<boolean>();
  

  constructor(private userService: UserService) { }

  ngOnInit() {

  }

  save() : void {

    this.userService.updateUser(this.user).subscribe(() =>{ console.log("UPDATED")
    });

    this.personalia = true;

    this.onPerEdited.emit(true);
    
  }

}
