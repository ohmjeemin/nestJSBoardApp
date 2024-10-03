import {Module} from '@nestjs/common';
import {BoardsModule} from './boards/boards.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import {typeORMConfig} from './configs/typeorm.config';
import {Board} from './boards/board.entity';
import {BoardRepository} from './boards/board.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([BoardRepository]),
    TypeOrmModule.forRoot(typeORMConfig),
    BoardsModule,
  ],
})
export class AppModule {}
