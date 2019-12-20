import { UserService } from 'src/app/shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

  currentUser: User;

  connectForm = this.fb.group({
    pseudo: [''],
    pwd: [''],
  });

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<ConnexionComponent>, private userService: UserService) { }

  ngOnInit() {
  }

  connexion() {
    if (this.connectForm.value.pwd === 'admin') {
      this.userService.getUserById(1).subscribe((data) => {
        this.currentUser = data;
        console.log(this.connectForm.value.pwd);
        console.log(this.currentUser);
        this.userService.currentUser = this.currentUser;
      });
    } else if (this.connectForm.value.pwd === 'luc') {
      this.userService.getUserById(2).subscribe((data) => {
        this.currentUser = data;
        console.log(this.connectForm.value.pwd);
        this.userService.currentUser = this.currentUser;
        console.log(this.currentUser);
      });
    }
    this.dialogRef.close();
  }
}
