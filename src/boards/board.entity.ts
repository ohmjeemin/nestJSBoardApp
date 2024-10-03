import {BaseEntity, PrimaryGeneratedColumn, Entity, Column} from 'typeorm';
import {BoardStatus} from './board-status.enum';

@Entity() //이 데코레이터가 누락되면 메타데이터를 읽어올 수 없음
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: BoardStatus;
}
