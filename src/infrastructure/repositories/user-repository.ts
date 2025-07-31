import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserEntity } from '@infrastructure/entities/user-entity';

import {
  ICraeteProps,
  IDeleteProps,
  IFindByIdProps,
  IFindByIdResponse,
  IRepository,
  IUpdateProps,
} from '@/domain/user/interfaces';

export class UserRepository implements IRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly ormRepo: Repository<UserEntity>,
  ) {}

  async create(props: ICraeteProps): Promise<void> {
    const user = this.ormRepo.create(props);
    await this.ormRepo.save(user);
  }

  async update(props: IUpdateProps): Promise<void> {
    await this.ormRepo.update(props.id, props);
  }

  async delete({ id }: IDeleteProps): Promise<void> {
    await this.ormRepo.delete(id);
  }

  async findById({ id }: IFindByIdProps): Promise<IFindByIdResponse | null> {
    const user = await this.ormRepo.findOne({ where: { id } });

    return user;
  }
}
