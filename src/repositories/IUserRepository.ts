import { User } from '../entities/users/IUser'

export interface IUserRepository {
  getUser(id: string): Promise<User>
  createUser(user: User): Promise<User>
}
