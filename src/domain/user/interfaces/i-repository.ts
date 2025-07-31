import { ICraeteProps } from '@domain/user/interfaces/i-create';
import { IDeleteProps } from '@domain/user/interfaces/i-delete';
import {
  IFindByIdProps,
  IFindByIdResponse,
} from '@domain/user/interfaces/i-find-by-id';
import { IUpdateProps } from '@domain/user/interfaces/i-update';

export interface IRepository {
  create(props: ICraeteProps): Promise<void>;
  update(props: IUpdateProps): Promise<void>;
  delete(props: IDeleteProps): Promise<void>;
  findById(props: IFindByIdProps): Promise<IFindByIdResponse | null>;
}
