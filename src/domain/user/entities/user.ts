export class User {
  constructor(
    public readonly id: string,
    public email: string,
    public firstName: string,
    public lastName: string,
    public password: string,
    public createdAt: Date,
    public updatedAt: Date,
  ) {}
}
