import {Board} from './board.entity';
import {CreateBoardDto} from './dto/create-board.dto';

export interface IBoardRepository {
  createBoard(reateBoardDto: CreateBoardDto): Promise<Board | undefined>;
}
