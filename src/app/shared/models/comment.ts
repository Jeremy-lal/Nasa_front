import { User } from './user';

export class Comment {
  id: number;
  user_id: User;
  createAt: Date;
  title: string;
  content: string;
}
