import { User } from 'src/entities/users/IUser'
import { IUserRepository } from '../IUserRepository'

class UserInMemoryRepository implements IUserRepository {
  private user: User

  public async getUser(id: string) {
    if (id) {
      console.log(`esse é o ${id}`)
    }
    return await this.user
  }

  public async createUser(user: User) {
    if (user) {
      console.log(`esse é o ${user}`)
    }
    return await this.user
  }
}

export { UserInMemoryRepository }
