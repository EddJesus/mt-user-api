import { Post } from '../posts/IPost'

export interface User {
  _id: string
  name: string
  email: string
  password: string
  posts: Post[]
}
