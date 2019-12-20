import { Component, OnInit } from '@angular/core';
import { CommentService } from 'src/app/shared/services/comment.service';
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forum-page',
  templateUrl: './forum-page.component.html',
  styleUrls: ['./forum-page.component.scss']
})
export class ForumPageComponent implements OnInit {

  comments: Comment[];
  currentUser: User;

  constructor(private commentService: CommentService, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.currentUser = this.userService.currentUser;
    this.commentService.getComment().subscribe( (data: Comment[]) => {
      this.comments = data;
      console.log('comments' + this.comments);
    });
    console.log(this.currentUser);
  }

}
