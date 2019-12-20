import { User } from '../../shared/models/user';
import {CommentService } from '../../shared/services/comment.service';
import {UserService } from '../../shared/services/user.service';
import { OnInit, Input, Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CommentFormComponent } from '../comment-form/comment-form.component';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})

export class CommentComponent implements OnInit {

  @Input() comment;
  currentUser: User;

  constructor(private commentService: CommentService, private userService: UserService, public dialog: MatDialog) { }

  ngOnInit() {
    this.currentUser = this.userService.currentUser;
  }
  deleteComment(event) {
      this.commentService.deleteComment(event).subscribe();
      console.log(event);
  }

  openCommentForm(comment: Comment): void {
    this.commentService.toComment = true;
    this.commentService.commentCliked = comment;
    console.log(comment);
    const dialogRef = this.dialog.open(CommentFormComponent, {
      width: '550px',
      data: comment,
    });
  }
}
