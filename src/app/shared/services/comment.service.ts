import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  static URL = '#';

  toUpdate = false;
  commentsCommun: Comment[];

  constructor(private http: HttpClient) { }

  getComment(): Observable<Comment[]> {
    return this.http.get<Comment[]>(CommentService.URL);
  }

  createComment(newComment: Comment) {
    return this.http.post(CommentService.URL, newComment);
  }

  updateComment(updateComment: Comment) {
    return this.http.put(CommentService.URL, updateComment);
  }

  deleteComment(id) {
    return this.http.delete(CommentService.URL + id);
  }

}
