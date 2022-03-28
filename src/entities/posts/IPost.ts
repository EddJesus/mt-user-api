import { User } from '../users/IUser'

export interface Post {
  _id: string
  description: string
  mediaUrl: string
  postOwner: User
}
