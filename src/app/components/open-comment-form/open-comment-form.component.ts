import { Component, OnInit } from '@angular/core';
import { CommentService } from '../../shared/services/comment.service';
import { CommentFormComponent } from '../comment-form/comment-form.component';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-open-comment-form',
  templateUrl: './open-comment-form.component.html',
  styleUrls: ['./open-comment-form.component.scss']
})
export class OpenCommentFormComponent implements OnInit {

  constructor(private commentService: CommentService, public dialog: MatDialog) { }

  ngOnInit() {
  }

  openCommentForm(): void {
    this.commentService.toComment = false;
    const dialogRef = this.dialog.open(CommentFormComponent, {
      width: '550px',
    });

  }

}
