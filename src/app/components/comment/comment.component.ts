import { User } from '../../shared/models/user';
import {CommentService } from '../../shared/services/comment.service';
import {UserService } from '../../shared/services/user.service';
import { OnInit, Input, Component } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})

export class CommentComponent implements OnInit {

  @Input() comment;
  currentUser: User;

  constructor(private commentService: CommentService, private userService: UserService) { }

  ngOnInit() {
    this.currentUser = this.userService.currentUser;
  }
  deleteComment(event) {
      this.commentService.deleteComment(event).subscribe();
      console.log(event);
  }
}
