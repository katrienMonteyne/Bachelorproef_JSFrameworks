import { Component, OnInit, Input } from '@angular/core';
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

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  save() : void {

    this.userService.updateUser(this.user).subscribe(user => this.user = user);

    this.personalia = true;

  }

}
