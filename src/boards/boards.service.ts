import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './boards.model';

@Injectable()
export class BoardsService {
    private boards: Board[] = [];

    getAllBoards(): Board[] {
        return this.boards;
    }

    createBoard(title: string, description: string) {
        const board = {
            title:title,
            description:description,
            status:BoardStatus.PUBLIC
        }
    }
}
