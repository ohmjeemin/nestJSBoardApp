import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {DataSource} from 'typeorm';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //데이터베이스 연결확인
  const dataSource = app.get(DataSource);
  if (dataSource.isInitialized) {
    console.log('db connection is established');
  } else {
    console.log('db connection is failed');
  }
  await app.listen(3000);
  console.log('ㅎㅇ');
}
bootstrap();
