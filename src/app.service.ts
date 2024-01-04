import { Injectable } from '@nestjs/common';
import {v4 as uuidv4} from 'uuid';

let dbStore = {}

interface MessageDto {
  name: string
  age: number
}

@Injectable()
export class AppService {
  createMessage(message: MessageDto): any {
    let uuid = uuidv4();
    dbStore[uuid] = message

    return {id: uuid}
  }

  getAll(): any {
    return dbStore
  }

  findOne(id: string){
    const data = dbStore[id]
    if(!data) return { message: `No data found for id: ${id}`}
    return data
  }
}
