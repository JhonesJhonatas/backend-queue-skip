import { User } from '@domain/user/entities/user';

export interface IFindByIdProps {
  id: string;
}

export type IFindByIdResponse = User;
