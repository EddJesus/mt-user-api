import { INestApplication } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './modules/app.module'

let app: INestApplication
const PORT = process.env.PORT

async function bootstrap() {
  app = await NestFactory.create(AppModule)

  await app.listen(PORT)
}

bootstrap()

export default app
