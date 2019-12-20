import { User } from './user';

export class Comment {
  id: number;
  user: User;
  createAt: Date;
  title: string;
  content: string;
  comments: Comment[];
}
