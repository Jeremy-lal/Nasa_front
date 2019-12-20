import { UserService } from 'src/app/shared/services/user.service';
import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.scss']
})
export class PersonneComponent implements OnInit {

  @Input() pers: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe();
  }

}
