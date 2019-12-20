import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/user.service';
import { ConnexionComponent } from '../connexion/connexion.component';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-top',
  templateUrl: './nav-top.component.html',
  styleUrls: ['./nav-top.component.scss']
})
export class NavTopComponent implements OnInit {

  currentUser: User;

  constructor(private userService: UserService, public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
  }

  connect(): void {
    const dialogRef = this.dialog.open(ConnexionComponent, {
      width: '550px',
    });
    dialogRef.afterClosed().subscribe((isConnectedx) => {
      this.currentUser = this.userService.currentUser;
    });
  }

  disconnect() {
    this.userService.currentUser = undefined;
    this.router.navigateByUrl('/');
  }
}
