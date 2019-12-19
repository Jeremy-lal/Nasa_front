import { Component, OnInit } from '@angular/core';
import { CommentService } from 'src/app/shared/services/comment.service';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-forum-page',
  templateUrl: './forum-page.component.html',
  styleUrls: ['./forum-page.component.scss']
})
export class ForumPageComponent implements OnInit {

  comments: Comment[];

  constructor(private commentService: CommentService) { }

  ngOnInit() {
    this.commentService.getComment().subscribe( (data: Comment[]) => {
      this.comments = data;
    });
  }

}
